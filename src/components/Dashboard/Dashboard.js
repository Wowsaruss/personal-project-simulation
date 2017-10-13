import React from 'react';
import axios from 'axios';

import HouseCard from './HouseCard';


export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      favoriteHouses: [],
      unfavorite: []
    };
    this.favorite = this.favorite.bind(this);
    this.unfavorite = this.unfavorite.bind(this);
  } 

  componentDidMount() {
    axios.get('/api/properties').then((houses) => {
      this.setState({
        houses: houses.data
      }); 
    });
    axios.get('/api/favorites').then((favorites) => {
      this.setState({
        favoriteHouses: favorites.data
      });
    });
  }

  favorite(houseId) {
    axios.post(`/api/favorites/${houseId}`).then((favHouses) => {
      console.log(favHouses)
      this.setState({
        favoriteHouses: favHouses.data
      });
    });
  }
  unfavorite(houseId) {
    axios.delete(`/api/favorites/${houseId}`).then((favHouses) => {
      this.setState({
        favoriteHouses: favHouses.data
      });
    });
  }

  render() {
    console.log(this.state);
    const houses = this.state.houses.map((house) => (
      <HouseCard
        house={house}
        favoriteHouses={this.state.favoriteHouses}
        key={house.id} 
        favorite={this.favorite}
        unfavorite={this.unfavorite}
         />
    ));
    return (
      <div className='dashboard' >
          {houses}
      </div>
    );
  }
}