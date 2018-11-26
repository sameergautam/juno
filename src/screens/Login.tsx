import * as React from 'react';
import './../style/App.scss';
import axios from 'axios';
import * as toastr from "toastr";
import './../../node_modules/toastr/toastr.scss'
import * as utils from "../utils";
import * as configs from './../config'

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.logUser = this.logUser.bind(this);
  }

  public logUser(event: any) {
    event.preventDefault();
    NProgress.start();
    const data = new FormData(event.target);
    axios.post(configs.HUB_SERVICE_URL + 'auth', {
      username: data.get('username'),
      password: data.get('password')
     })
      .then((response) => {
        const idToken = response.headers.authorization.split(':')[1].trim();
        const tokens = utils.decodeToken(idToken);
        NProgress.done();
        localStorage.setItem('auth', response.headers.authorization);
        localStorage.setItem('userId', tokens['custom:id']);
        this.props.history.push('/home');
      })
      .catch((error) => {
        NProgress.done();
        toastr.error('Email or Password invalid');
      });
  }

  public render() {
    return (
      <div className="login">
        <form onSubmit={this.logUser}>
          <img src="cf-separated-logo.png" alt="CloudFactory" width="300" className="logo" /><br />
          <input type="text" name="username" id="username" placeholder="Username" required={true} /><br />
          <input type="password" name="password" id="password" placeholder="Password" required={true} /><br />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
