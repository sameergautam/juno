import * as React from 'react';
import './../style/App.scss';

class WebView extends React.Component<any, any> {
  private container: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);
    this.container = React.createRef();
  }
  componentDidMount() {
    const { id, className, url } = this.props;
    const webViewContainer = this.container.current;
    if (webViewContainer) { 
      webViewContainer.innerHTML = `<webview id=${id} className=${className} src=${url} autosize></webview>`;
      const view = webViewContainer.querySelector('webview');
      if(view) {
        view.addEventListener('did-start-loading', this.props.didFinishLoad);
      };
    }
    
  }
  public render() {
    return <div ref={this.container} className="browser-view" />;
  }
}

export default WebView;