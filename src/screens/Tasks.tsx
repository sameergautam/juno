import * as React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './../style/Tasks.scss';
import Topbar from './Topbar';
import TabContent from '../components/TabContent';
class Tasks extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div>
        <Topbar title="Tasks" />
        <div className="browser-window">
          <Tabs defaultActiveKey={1} animation={false} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Tab 1">
              <TabContent
                defaultUrl={'https://www.google.com'}
                tabId='webview1'
              />
            </Tab>
            <Tab eventKey={2} title="Tab 2">
              <TabContent
                defaultUrl={'https://www.facebook.com'}
                tabId='webview2'
              />
            </Tab>
            <Tab eventKey={3} title="Tab 3">
              Tab 3 content
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Tasks;