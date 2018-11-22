import * as React from 'react';
import './../style/App.scss';
import axios from 'axios';
// import * as toastr from "toastr";
import './../../node_modules/toastr/toastr.scss'

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.logUser = this.logUser.bind(this);
  }

  public logUser(event: any) {
    event.preventDefault();
    NProgress.start();
    const data = new FormData(event.target);
    axios.post('http://localhost:8081/users/login', { 
      email: data.get('username'),
      password: data.get('password')
     })
      .then((response) => {
        NProgress.done();
        // console.log(response.data.data.accessToken.jwtToken);
        // console.log(response.data.data.idToken.jwtToken);
        localStorage.setItem('idToken', response.data.data.idToken.jwtToken);
        localStorage.setItem('accessToken', response.data.data.accessToken.jwtToken);
        localStorage.setItem('user_id', response.data.user_id);
        this.props.history.push('/home');
      })
      .catch((error) => {
        NProgress.done();
        console.log(error.response)
        // toastr.error(error.response.data);
      });
  }

  public render() {
    return (
      <div className="login">
        <form onSubmit={this.logUser}>
          <img src="cf-separated-logo.png" alt="CloudFactory" width="300" className="logo" /><br />
          <input type="text" name="username" id="username" placeholder="Username" required /><br />
          <input type="password" name="password" id="password" placeholder="Password" required /><br />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
