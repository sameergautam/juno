import * as React from 'react';
// import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
import './../style/Tasks.scss';
import Topbar from './Topbar';
import TabContent from '../components/TabContent';
class Tasks extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      workUrls: ['https://ibotta.com', 'https://expensify.com', 'https://youtube.com'],
      activeTab: 'tab1'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  public handleSelect(evt: any) {
    this.setState({
      activeTab: evt.currentTarget.id
    })
  }

  public addTabs() {
    const workUrls = this.state.workUrls.concat('https://google.com');
    this.setState({
      workUrls: workUrls,
      activeTab: `tab${workUrls.length}`,
    });
  }

  public getActiveIndex(workUrls: Array<string>, index: number): any {
    return workUrls[index].length ? index : this.getActiveIndex(workUrls, index - 1);
  }

  public removeTab(index: number) {
    this.state.workUrls.splice(index, 1, '');
    const workUrls = this.state.workUrls;
    const currentIndex = this.state.activeTab.slice(-1) - 1;
    const activeIndex = this.getActiveIndex(workUrls, currentIndex);
    this.setState({
      workUrls: workUrls,
      activeTab: `tab${activeIndex + 1}`
    });
  }

  public render() {
    const { workUrls } = this.state;
    console.log(workUrls);
    return (
      <div>
        <Topbar title="Tasks" />
        <div className="browser-window">
          <ul className="tab-navs">
            {
              workUrls.map( (url: string, index: number) => {
                return url.length ? (
                <div className="tab-nav-wrapper">
                <li className={this.state.activeTab === `tab${index + 1}` ? 'active' : ''} id={`tab${index + 1}`} onClick={this.handleSelect}>{`Tab ${index + 1}`}</li>
                <i className="fas fa-times-circle cross-tab" onClick={() => this.removeTab(index)}></i>
                </div> ) : null
              })
            }
            <button className="add-tab" onClick={() => this.addTabs()}><i className="fas fa-plus"></i></button>
          </ul>
          <div className="tab-body">
            { workUrls.map( (url: string, index: number) => {
              return url.length ? (
                <div className={this.state.activeTab === `tab${index + 1}` ? 'active' : ''}>
                <TabContent
                  defaultUrl={url}
                  tabId={`webview${index + 1}`}
                />
              </div>) : null
            })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;