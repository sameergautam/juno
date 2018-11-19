import * as React from 'react';
import './../style/Tasks.scss';
import WebView from '../components/WebView';
import Topbar from './Topbar';
import { goForward, goBack, reloadUrl, loadUrl, getWebViewSrc, viewCanGoBack, viewCanGoForward } from '../helper';

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      defaultUrl: 'https://www.google.com',
      omniValue: '',
      isBackBtnActive: false,
      isForwardBtnActive: false,
      isPageLoading: true,
    }
  }

  public handleGoBack() {
    this.setState({
      isPageLoading: true
    });
    goBack();
  }

  public handleGoForward() {
    this.setState({
      isPageLoading: true
    });
    goForward();
  }

  public handleReload() {
    this.setState({
      isPageLoading: true
    });
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
      this.setState({
        isPageLoading: true
      });
    }
  }

  public handleOmniBoxChange(evt: React.FormEvent<HTMLInputElement>) {
    const value = evt.currentTarget.value;
    this.setState({
      omniValue: value,
    });
  }

  public handleWebViewLoad() {
    this.setState({
      isBackBtnActive: viewCanGoBack(),
      isForwardBtnActive: viewCanGoForward(),
      omniValue: getWebViewSrc(),
      isPageLoading: false,
    });
  }

  public render() {
    return (
      <div>
        <Topbar title="Tasks" />
        <div className="browser-window">
          <nav id="navigation">
            <div id="back">
              <i className={`fas fa-arrow-left ${this.state.isBackBtnActive ? 'active' : ''}`} aria-hidden="true" onClick={() => this.handleGoBack()} />
            </div>
            <div id="forward">
              <i className={`fas fa-arrow-right ${this.state.isForwardBtnActive ? 'active' : ''}`} aria-hidden="true" onClick={() => this.handleGoForward()} />
            </div>
            <div id="refresh">
              <i className={`fas fa-redo active ${this.state.isPageLoading ? 'load' : ''}`} aria-hidden="true" onClick={() => this.handleReload()} />
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