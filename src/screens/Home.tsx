import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="wrapper">
        <ul className="nav">
          <Link to="/tasks" title="Tasks"><i className="fas fa-tasks" /></Link>
          <Link to="/settings" title="Settings"><i className="fas fa-cog" /></Link>
          <Link to="#" title="Edit Profile"><i className="fas fa-user" /></Link>
          <Link to="#" title="Notifications"><i className="fas fa-bell" /></Link>
          <Link to="/" title="Log Out"><i className="fas fa-sign-out-alt" /></Link>
        </ul>
      </div>
    );
  }
}

export default Home;
