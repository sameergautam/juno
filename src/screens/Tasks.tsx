import * as React from 'react';
import { connect } from 'react-redux';
import './../style/Tasks.scss';
import Topbar from './Topbar';
import TabContent from '../components/TabContent';
import { getWebViewTitle } from '../helper';

class Tasks extends React.Component<any, any> {
  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if(nextProps.tasks.length > prevState.workUrls.length) {
      return ({ workUrls: nextProps.tasks});
    }
    return null;
  }

  constructor(props: any) {
    super(props);
    this.state = {
      workUrls: this.props.tasks,
      activeTab: 'tab1',
      titles:['New tab', 'New tab', 'New tab']
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleWebViewLoad = this.handleWebViewLoad.bind(this);
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

  public handleWebViewLoad(webviewId: string) {
    const tabIndex = Number(/\d+/.exec(webviewId)![0]);
    const { titles } = this.state;
    const tabTitle = getWebViewTitle(webviewId);
    const updatedTitles = titles.slice();
    updatedTitles[tabIndex - 1] = tabTitle;
    this.setState({
      titles: updatedTitles
    })
  }

  public render() {
    const { workUrls, titles} = this.state;
    const nonEmptyUrls = workUrls.filter((url:string) =>  url.length > 0);
    return (
      <div>
        <Topbar title="Tasks" />
        <div className="browser-window">
          <ul className="tab-navs">
            {
              workUrls.map( (url: string, index: number) => {
                return url.length ? (
                <div className="tab-nav-wrapper" style={{width: `${100 / nonEmptyUrls.length}%`}}>
                  <li className={this.state.activeTab === `tab${index + 1}` ? 'active' : ''} id={`tab${index + 1}`} onClick={this.handleSelect}>{titles[index]}</li>
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
                  onWebViewLoad={this.handleWebViewLoad}
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

const mapStateToProps = (store: any) => {
  return ({
    tasks: store.profileState.tasks
  });
}
export default connect(mapStateToProps)(Tasks);