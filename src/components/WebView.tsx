import * as React from 'react';
import './../style/App.scss';

class WebView extends React.Component<any, any> {
  private container: React.RefObject<HTMLInputElement>;

  public constructor(props: any) {
    super(props);
    this.container = React.createRef();
  }

  public componentDidMount() {
    const { id, className, url } = this.props;
    const webViewContainer = this.container.current;
    if (webViewContainer) { 
      webViewContainer.innerHTML = `<webview id=${id} className=${className} src=${url} autosize></webview>`;
      const view = webViewContainer.querySelector('webview');
      if(view) {
        view.addEventListener('did-finish-load', this.props.didFinishLoad);
      };
    }
    
  }
  
  public render() {
    return <div ref={this.container} />;
  }
}

export default WebView;