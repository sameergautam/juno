import * as React from 'react';
import './../style/App.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Topbar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
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
    const workMode = event.target.checked;
    if (workMode) {
      this.props.history.push('/tasks');
    } else {
      this.props.history.push('/home');
    }
  }

  public render() {
    const { workingMode } = this.props;
    return (
      <div className="topbar">
        <div className="logo"><Link to="/home" title="Home"><img src="cf-logo-header.png" alt="CloudFactory" /></Link></div>
        <div className="title">{this.props.title}</div>
        <div className="rightNav">
          <div>
            <span className="switch_mode">{workingMode ? 'Working' : 'Not Working'}</span>
            <label className="switch">
              <input type="checkbox" checked={workingMode} onChange={this.changeWorkMode} />
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

const mapStateToProps = (store: any) => {
  return ({
    workingMode: store.profileState.workingMode,
  });
}
export default connect(mapStateToProps)(Topbar);
