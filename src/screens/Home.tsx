import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.renderTasks = this.renderTasks.bind(this);
  }

  public renderTasks() {
    this.props.history.push('/tasks');
    window.location.reload();
  }

  public render() {
    return (
      <div className="wrapper">
        <ul className="nav">
          <button onClick={this.renderTasks} title="Tasks"><i className="fas fa-tasks" /></button>
          <Link to="/settings" title="Settings"><i className="fas fa-cog" /></Link>
          <Link to="#" title="Edit Profile"><i className="fas fa-user" /></Link>
          <Link to="#" title="Notifications"><i className="fas fa-bell" /></Link>
          <Link to="/" title="Log Out"><i className="fas fa-sign-out-alt" /></Link>
        </ul>

        <div className="main">
          <div className="left tasks" />
          <div className="right" />
          <div className="clear" />
        </div>
      </div>
    );
  }
}

export default Home;
