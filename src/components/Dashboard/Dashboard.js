import React from 'react';
import axios from 'axios';

import HouseCard from './HouseCard';


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
    axios.get('/api/favorites').then((favorites) => {
      this.setState({
        favoriteHouses: favorites.data
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
      <HouseCard house={house} favorites={this.state.favoriteHouses} key={house.id} />
    ));
    return (
      <div className='dashboard' >
          {houses}
      </div>
    );
  }
}