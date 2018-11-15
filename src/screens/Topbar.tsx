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
            <span className="slider round"></span>
          </label>
          <span>Not Working</span>
          </div>
          <div><i className="fas fa-bell" /></div>
          <div><Link to="/profile"><i className="fas fa-user" /></Link></div>
          <div><Link to="/"><i className="fas fa-sign-out-alt" /></Link></div>
        </div>
      </div>
    );
  }
}

export default Topbar;
