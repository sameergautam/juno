import * as React from 'react';
import './../style/App.scss';
import { Link } from 'react-router-dom';
import history from './../history';

class Topbar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    const workMode = (window.location.href === "http://localhost:3000/tasks#/") ? true : false;
    console.log(window.location.href);
    console.log(workMode);
    this.state = {
      workMode: workMode
    }
    this.logout = this.logout.bind(this);
    this.changeWorkMode = this.changeWorkMode.bind(this);
  }

  public logout(event: any) {
    event.preventDefault();
    localStorage.removeItem('auth');
    localStorage.removeItem('userId');
    window.location.href = "/"
  }

  public changeWorkMode(event: any) {
    const work_mode = event.target.checked;
    this.setState({ workMode: work_mode });
    setTimeout(function() {
      if (work_mode) {
        history.push('/tasks#/');
      } else {
        history.push('/profile');
      }
    }, 300);
  }

  public render() {
    const checked = (window.location.href === "http://localhost:3000/tasks#/") ? true : false;

    return (
      <div className="topbar">
        <div className="logo"><Link to="/home" title="Home"><img src="cf-logo-header.png" alt="CloudFactory" /></Link></div>
        <div className="title">{this.props.title}</div>
        <div className="rightNav">
          <div>
            <span className="switch_mode">{checked ? 'Working' : 'Not Working'}</span>
            <label className="switch">
              <input type="checkbox" checked={checked} onClick={this.changeWorkMode} />
              <span className="slider round" />
            </label>
          </div>
          <Link to="#" className="Notifications"><i className="fas fa-bell" /></Link>
          <Link to="/profile" className="Profile"><i className="fas fa-user" /></Link>
          <Link to="/" className="Sign Out" onClick={this.logout}><i className="fas fa-sign-out-alt" /></Link>
        </div>
      </div>
    );
  }
}

export default Topbar;
