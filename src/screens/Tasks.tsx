import * as React from 'react';
import './../style/Tasks.css';


class Tasks extends React.Component {
  public render() {
    return (
      <div className="toolbar">
        <div id="nav-body-tabs" />
        <div id="nav-body-ctrls" />
        <div id="nav-body-views" />
      </div>
    );
  }
}

export default Tasks;
