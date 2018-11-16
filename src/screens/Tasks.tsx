import * as React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './../style/Tasks.scss';
import Topbar from './Topbar';
import TabContent from '../components/TabContent';
class Tasks extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      workUrls: ['https://ibotta.com', 'https://expensify.com', 'https://youtube.com'],
      activeKey: 1,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  public addTabs() {
    const workUrls = this.state.workUrls.concat('https://google.com');
    this.setState({
      workUrls: workUrls,
      activeKey: workUrls.length,
    });
  }
  public handleSelect(evt: React.MouseEvent) {
    this.setState({
      activeKey: evt
    })
  }
  public render() {
    const { workUrls, activeKey } = this.state;
    return (
      <div>
        <Topbar title="Tasks" />
        <button onClick={() => this.addTabs()}>Add</button>
        <div className="browser-window">
          <Tabs activeKey={activeKey} animation={false} onSelect={this.handleSelect} id="controlled-tab">
            { workUrls.map( (url: string, index: number) =>
              <Tab eventKey={index + 1} title={`Tab ${index + 1}`}>
                <TabContent
                  defaultUrl={url}
                  tabId={`webview${index + 1}`}
                />
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Tasks;