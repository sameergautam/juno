import * as React from 'react';
import './../style/App.scss';

class WebView extends React.Component<any, any> {
  public render() {
    return (
      <div className="browser-view">
        <webview id={this.props.id} className={this.props.className} src={this.props.url} autosize></webview>
      </div>
    );
  }
}

export default WebView;