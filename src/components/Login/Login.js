import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    login(loginInfo) {
        axios.post('/api/auth/login', loginInfo)
        .then((response) => {
            if(response.status === 200) {
                this.props.history.push('/dashboard');
            }
        }).catch((err) => {
            console.log(err);
            alert('nope');
        });
    }

    register(registerInfo) {
        if(registerInfo.username && registerInfo.password) {
        axios.post('/api/auth/register', registerInfo)
        .then((response) => {
            if(response.status === 200) {
                this.props.history.push('/dashboard');
            }
        })
        .catch((err) => {
            console.log(err);
            alert('pick a better name');
        });
    } else {
        alert('Fill in info please')
    }
}

    updateUsername(username) {
        console.log(username)
        this.setState({
            username
        });
    }
    updatePassword(password) {
        console.log(password)
        this.setState({
            password
        });
    }

  render() {
    return (
      <div>
         <input
            type='text'
            value={this.state.username}
            onChange={(e) => {this.updateUsername(e.target.value);}}
            placeholder='Username'
            />
         <input
            type='password'
            value={this.state.password}
            onChange={(e) => {this.updatePassword(e.target.value);}}
            placeholder='Password'
         />
         <button onClick={(e) => (this.login(this.state))} >LOGIN</button>
         <button onClick={(e) => (this.register(this.state))} >REGISTER</button>
      </div>
    );
  }
}