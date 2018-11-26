import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Home, Login, Profile, Settings, Tasks } from './screens';
import './style/index.scss';
import { fetchTasks, fetchProfile } from './action/userSession';
// import history from './history';

class App extends React.Component<any, any> {
  public componentDidMount() {
    const { dispatch } = this.props;
    if(localStorage.getItem('auth')){
      dispatch(fetchTasks());
      dispatch(fetchProfile());
    }
  }

  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Login}  />
          <Route path="/settings" component={Settings} />
          <Route path="/home" component={Home} />
          <Route path="/tasks" component={Tasks}/>
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
