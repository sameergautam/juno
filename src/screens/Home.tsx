import * as React from 'react';
import './../style/Home.scss';
import WebView from '../components/WebView';
import Topbar from './Topbar';
import { goForward, goBack, reloadUrl, updateUrl } from '../helper';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    console.log('aaaaaaaaaaaaaaa');
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
        <Topbar title="Tasks" />
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

export default Home;
