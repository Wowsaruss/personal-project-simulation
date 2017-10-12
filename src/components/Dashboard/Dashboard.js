import React from 'react';
import axios from 'axios';


export default class Dashboard extends React.Component {

  getUserInfo() {
    axios.get('/user').then(user => {
      console.log(user.data);
    })
  }

  render() {
    return (
      <div>
        <h1>You are logged in!</h1>
          <button onClick={() => { this.getUserInfo();} } >Success!</button>
      </div>
    );
  }
}