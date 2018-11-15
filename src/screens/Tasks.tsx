import * as React from 'react';
import './../style/Home.scss';
import WebView from '../components/WebView';
import Topbar from './Topbar';
import { goForward, goBack, reloadUrl, loadUrl, getWebViewSrc } from '../helper';

class Home extends React.Component<any, any> {
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
    const value = evt.currentTarget.value;
    if(evt.which === 13) {
      if (value.indexOf('.com') > 0) {
        const https = value.slice(0, 8).toLowerCase();
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
        <Topbar title="Tasks" />
        <div className="browser-window">
          <nav id="navigation">
            <div id="back">
              <i className="fas fa-arrow-left" aria-hidden="true" onClick={() => this.handleGoBack()} />
            </div>
            <div id="forward">
              <i className="fas fa-arrow-right" aria-hidden="true" onClick={() => this.handleGoForward()} />
            </div>
            <div id="refresh">
              <i className="fas fa-redo" aria-hidden="true" onClick={() => this.handleReload()} />
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

export default Home;