import * as React from 'react';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
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

  public handleSelect(evt: any) {
    this.setState({ activeKey: evt });
  }

  public addTabs() {
    const workUrls = this.state.workUrls.concat('https://google.com');
    this.setState({
      workUrls: workUrls,
      activeKey: workUrls.length,
    });
  }
  public removeTab(index: number) {
    this.state.workUrls.splice(index, 1);
    const workUrls = this.state.workUrls;
    this.setState({
      workUrls: workUrls,
      activeKey: workUrls.length,
    });
  }
  public render() {
    const { workUrls, activeKey } = this.state;
    console.log(workUrls);
    return (
      <div>
        <Topbar title="Tasks" />
        <div className="browser-window">
          <Tab.Container id="tabs-with-dropdown" onSelect={this.handleSelect} activeKey={activeKey}>
            <Row className="clearfix">
              <Col sm={12}>
                <Nav bsStyle="tabs">
                { workUrls.map( (url: string, index: number) =>
                    <NavItem eventKey={index + 1}>
                      {`Tab ${index + 1}`}
                      <i className="fas fa-times-circle cross-tab" onClick={() => this.removeTab(index)}></i>
                    </NavItem>
                )}
                <button className="add-tab" onClick={() => this.addTabs()}><i className="fas fa-plus"></i></button>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content animation>
                  { workUrls.map( (url: string, index: number) =>
                    <Tab.Pane eventKey={index + 1}>
                      <TabContent
                        defaultUrl={url}
                        tabId={`webview${index + 1}`}
                      />
                    </Tab.Pane>
                  )}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
}

export default Tasks;