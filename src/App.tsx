import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import { withRouter } from 'react-router';
// import { Home, Profile, Settings } from './screens';
import { Home, Login, Profile, Settings, Tasks } from './screens';
import './style/index.scss';

class App extends React.Component {
  // public redirectToLoginPage = (): null => {
  //   window.location.href = "https://sputnik.auth.us-east-1.amazoncognito.com/login?client_id=426srpamk96187up4q0kvbieab&redirect_uri=http://localhost:8000/dashboard&response_type=code&scope=openid";
  //   return null;
  // };
  
  public render() {
    console.log(window.location.href);
    return (
      <Router>
        <div>
          {/* <Route exact={true} path="/" render={this.redirectToLoginPage}  /> */}
          <Route exact={true} path="/" component={Login}  />
          <Route path="/settings" component={Settings} />
          <Route path="/home" component={Home} />
          <Route path="/tasks" render={() => <Tasks dataUrl="abc.com" />}/>
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default (App);
