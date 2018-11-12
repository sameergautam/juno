import * as React from 'react';
import './../style/Tasks.scss';
import { goForward, goBack, reloadUrl } from '../helper';

class Tasks extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      defaultUrl: 'https://www.google.com'
    }
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleGoForward = this.handleGoForward.bind(this);
    this.handleReload = this.handleReload.bind(this);
  }

  public handleGoBack() {
    goBack();
  }

  public handleGoForward() {
    goForward();
  }

  public handleReload() {
    reloadUrl();
  }

  public render() {
    return (
      <div>
        <div className="tasks-header">
          HEADER
        </div>
        <div className="browser-window">
          <nav id="navigation">
            <div id="back">
              <i className="fas fa-arrow-left" aria-hidden="true" onClick={this.handleGoBack}></i>
            </div>
            <div id="forward">
              <i className="fas fa-arrow-right" aria-hidden="true" onClick={this.handleGoForward}></i>
            </div>
            <div id="refresh">
              <i className="fas fa-redo" aria-hidden="true" onClick={this.handleReload}></i>
            </div>
            <div id="omnibox">
              <input type="text" id="url" />
            </div>
          </nav>
          <div className="browser-view">
            <webview id="view" className="page" src={this.state.defaultUrl} autosize></webview>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
