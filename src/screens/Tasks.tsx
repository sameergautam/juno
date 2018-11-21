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

  public getActiveIndex(index: number, difference: number ): any {
    const { workUrls } = this.state;
    return workUrls[index].length ? index : this.getActiveIndex(index + difference, difference);
  }

  public removeTab(targetIndex: number) {
    const { workUrls, activeTab } = this.state;
    const currentIndex = Number(/\d+/.exec(activeTab)![0]) - 1;
    const currentTabs: Array<number> = [];
    workUrls.map( (url: string, index: number) => {
      if(url.length > 0) currentTabs.push(index);
    });

    let activeIndex;
    if (currentTabs.length === 1) return false;

    if (currentIndex === targetIndex) {
      if(currentTabs.indexOf(targetIndex) === currentTabs.length - 1) {
        activeIndex = this.getActiveIndex(targetIndex - 1, -1);
      }
      else {
        activeIndex = this.getActiveIndex(targetIndex + 1, 1);
      }
    } else {
      activeIndex = currentIndex;
    }
    workUrls.splice(targetIndex, 1, '');
    this.setState({
      workUrls: workUrls,
      activeTab: `tab${activeIndex + 1}`
    });
    return true;
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