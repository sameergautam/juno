import * as React from 'react';
import './../style/Tasks.scss';

class Tasks extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <div className="topbar">
          <div className="logo"><img src="cf-logo-header.png" alt="CloudFactory" /></div>
          <div className="title">Dashboard</div>
          <div className="rightNav">
            <div>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span>Not Working</span>
            </div>
            <div><i className="fas fa-bell" /></div>
            <div><i className="fas fa-user" /></div>
          </div>
        </div>

        <div className="toolbar" data-url={this.props.dataUrl}>
          <div id="nav-body-tabs" />
          <div id="nav-body-ctrls" />
          <div id="nav-body-views" />
        </div>
      </div>
    );
  }
}

export default Tasks;
