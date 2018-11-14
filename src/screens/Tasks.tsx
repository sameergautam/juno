import * as React from 'react';
import './../style/Tasks.scss';
import WebView from '../components/WebView';
import { goForward, goBack, reloadUrl, loadUrl, getWebViewSrc } from '../helper';

class Tasks extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      defaultUrl: 'https://www.google.com',
      omniValue: '',
    }
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

  public handleOmniBoxEnter(evt: React.KeyboardEvent<HTMLInputElement>) {
    let value = evt.currentTarget.value;
    if(evt.which === 13) {
      if (value.indexOf('.com') > 0) {
        let https = value.slice(0, 8).toLowerCase();
        if (https === 'https://') {
          loadUrl(value);
        } else {
          loadUrl(`https://${value}`);
        }
      } else {
        loadUrl(`https://www.google.com.np/search?q=${value}`)
      }
    }
  }

  public handleOmniBoxChange(evt: React.FormEvent<HTMLInputElement>) {
    const value = evt.currentTarget.value;
    this.setState({
      omniValue: value
    });
  }

  public handleWebViewLoad() {
    this.setState({
      omniValue: getWebViewSrc()
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
              <i className="fas fa-arrow-left" aria-hidden="true" onClick={() => this.handleGoBack()}></i>
            </div>
            <div id="forward">
              <i className="fas fa-arrow-right" aria-hidden="true" onClick={() => this.handleGoForward()}></i>
            </div>
            <div id="refresh">
              <i className="fas fa-redo" aria-hidden="true" onClick={() => this.handleReload()}></i>
            </div>
            <div id="omnibox">
              <input
                type="text"
                id="url"
                onKeyPress={evt => this.handleOmniBoxEnter(evt)}
                onChange={evt => this.handleOmniBoxChange(evt)}
                value={this.state.omniValue}
              />
            </div>
          </nav>
          <div className="browser-view">
            <WebView
              id="view"
              className="page"
              url={this.state.defaultUrl}
              didFinishLoad={() => this.handleWebViewLoad()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
