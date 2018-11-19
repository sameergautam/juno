import * as React from 'react';
import './../style/App.scss';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <Topbar title="Home" />
        <div className="wrapper profile-widget">
          <div className="profile-details">
            <span><img src="start-work.png" alt="Start Work" width="230" /></span><br />
            <ul className="nav">
              <Link to="/tasks" title="Tasks">Start Working</Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
