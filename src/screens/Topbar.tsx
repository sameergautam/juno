import * as React from 'react';
import './../style/App.scss';
import { Link } from 'react-router-dom';

class Topbar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="topbar">
        <div className="logo"><Link to="/home" title="Home"><img src="cf-logo-header.png" alt="CloudFactory" /></Link></div>
        <div className="title">{this.props.title}</div>
        <div className="rightNav">
          <div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
          <span style={{display: 'none'}}>Not Working</span>
          </div>
          <Link to="#" className="Notifications"><i className="fas fa-bell" /></Link>
          <Link to="/profile" className="Profile"><i className="fas fa-user" /></Link>
          <Link to="/" className="Sign Out"><i className="fas fa-sign-out-alt" /></Link>
        </div>
      </div>
    );
  }
}

export default Topbar;
