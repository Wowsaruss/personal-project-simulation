import React from 'react';
import axios from 'axios';
import auth_logo from '../../assets/auth_logo.png';

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
            <div className='auth'
            // submit when enter key is pressed
            onKeyUp={(e) => {
                if(e.keyCode === 13) {
                    this.login(this.state);
                }
            }}>

                <img src={auth_logo} alt='' />

                    <div className='inputs' >
                        <h3>Username</h3>
                        <input
                            type='text'
                            value={this.state.username}
                            onChange={(e) => {this.updateUsername(e.target.value);}}
                            />
                    </div>

                    <div className='inputs' >
                        <h3>Password</h3>
                        <input
                            type='password'
                            value={this.state.password}
                            onChange={(e) => {this.updatePassword(e.target.value);}}
                        />
                    </div>

                    <div className='buttons' >
                        <div
                            className='button light-green'
                            onClick={(e) => (this.login(this.state))} >
                            LOGIN
                        </div>
                        <div
                            className='button dark-green'
                            onClick={(e) => (this.register(this.state))} >
                            REGISTER
                        </div>
                    </div>

            </div>
      </div>
    );
  }
}