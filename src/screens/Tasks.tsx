import * as React from 'react';
import './../style/Tasks.scss';

class Tasks extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="toolbar" data-url={this.props.dataUrl}>
        <div id="nav-body-tabs" />
        <div id="nav-body-ctrls" />
        <div id="nav-body-views" />
      </div>
    );
  }
}

export default Tasks;
