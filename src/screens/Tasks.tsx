import * as React from 'react';
import './../style/Tasks.scss';
import WebView from '../components/WebView';
import { goForward, goBack, reloadUrl, updateUrl } from '../helper';

class Tasks extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      defaultUrl: 'https://www.google.com',
      omniValue: '',
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

  public handleOmniBoxEnter( evt: React.KeyboardEvent<HTMLInputElement>) {
    const value = evt.currentTarget.value;
    if(evt.which === 13) {
      updateUrl(value);
    }
    this.setState({
      omniValue: value
    })
  }

  public render() {
    return (
      <div>
        <div className="topbar">
          <div className="logo"><a href="/home"><img src="cf-logo-header.png" alt="CloudFactory" /></a></div>
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
              <input
                type="text"
                id="url"
                onKeyPress={evt => this.handleOmniBoxEnter(evt)}
              />
            </div>
          </nav>
          <div className="browser-view">
            <WebView
              id="view"
              className="page"
              url={this.state.defaultUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
