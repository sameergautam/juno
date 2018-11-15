import * as React from 'react';
import './../style/App.scss';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <Topbar title="Home" />
        <div className="wrapper">
          <ul className="nav">
            <Link to="/tasks" title="Tasks"><i className="fas fa-tasks" /></Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
