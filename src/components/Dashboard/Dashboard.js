import React from 'react';
import axios from 'axios';


export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      favoriteHouses: []
    };
  }

  componentDidMount() {
    axios.get('/api/properties').then((houses) => {
      this.setState({
        houses: houses.data
      });
    });
  }

  favorite(houseId) {
    axios.post(`/api/favorites/${houseId}`).then((favHouses) => {
      this.setState({
        favoriteHouses: favHouses.data
      });
    });
  }

  render() {
    const houses = this.state.houses.map((house) => (
      <div key={house.id} className='house-card' >
        <div className='img-container' >
            <img src={house.img} alt=''/>
        </div>
        <div className='center' >
            <h3>{house.name}</h3>
            <p>{house.description}</p>
        </div>
        <div className='right' >
            <div className='spread' >
              <h2>Loan: ${house.loan}</h2>
              <div onClick={() => {this.favorite(house.id);}} >⭐</div>
            </div>
            <h2>Desired Rent: ${house.desiredrent}</h2>
            <h2>Address: {house.address}</h2>
            <h2>City: {house.city}</h2>
        </div>
      </div>
    ))
    return (
      <div className='dashboard' >
          {houses}
      </div>
    );
  }
}