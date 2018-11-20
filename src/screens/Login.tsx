import * as React from 'react';
import './../style/App.scss';
import axios from 'axios';

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.logUser = this.logUser.bind(this);
  }

  public logUser(event: any) {
    event.preventDefault();
    const data = new FormData(event.target);
    axios.post('http://localhost:8080/sign_in', { 
      email: data.get('username'),
      password: data.get('password')
     })
      .then((response) => {
        localStorage.setItem('token', response.data.data.idToken.jwtToken);
        this.props.history.push('/home');
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  public render() {
    return (
      <div className="login">
        <form onSubmit={this.logUser}>
          <img src="cf-separated-logo.png" alt="CloudFactory" width="300" className="logo" /><br />
          <input type="text" name="username" id="username" placeholder="Username" /><br />
          <input type="password" name="password" id="password" placeholder="Password" /><br />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
