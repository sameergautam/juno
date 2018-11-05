import * as React from 'react';
import './../style/App.scss';

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.logUser = this.logUser.bind(this);
  }

  public logUser() {
    this.props.history.push('/home');
  }

  public render() {
    return (
      <div className="login">
        <img src="cf-separated-logo.png" alt="CloudFactory" width="300" className="logo" /><br />
        <input type="text" name="username" placeholder="Username" /><br />
        <input type="password" name="password" placeholder="Password" /><br />
        <button onClick={this.logUser}>Login</button>
      </div>
    );
  }
}

export default Login;
