import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import { withRouter } from 'react-router';
import { Home, Login, Settings, Tasks } from './screens';
import './style/index.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Login}  />
          <Route path="/settings" component={Settings} />
          <Route path="/home" component={Home} />
          <Route path="/tasks" component={Tasks} />
        </div>
      </Router>
    );
  }
}

export default (App);
