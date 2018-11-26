import * as React from 'react';
import { connect } from 'react-redux';
import './../style/Tasks.scss';
import Topbar from './Topbar';
import TabContent from '../components/TabContent';
import { getWebViewTitle } from '../helper';
import { switchWorkMode } from '../action/userSession';

class Tasks extends React.Component<any, any> {
  public static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if(nextProps.taskUrls.length > prevState.workUrls.length) {
      return ({ workUrls: nextProps.taskUrls, titles: nextProps.taskTitles });
    }
    return null;
  }

  constructor(props: any) {
    super(props);
    this.state = {
      workUrls: this.props.taskUrls,
      activeTab: 'tab1',
      titles: this.props.taskTitles,
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleWebViewLoad = this.handleWebViewLoad.bind(this);
  }

  public componentDidMount() {
    this.props.dispatch(switchWorkMode(true));
  }

  public handleSelect(evt: any) {
    this.setState({
      activeTab: evt.currentTarget.id
    })
  }

  public addTabs() {
    const workUrls = this.state.workUrls.concat('https://google.com');
    this.setState({
      workUrls,
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
    const currentTabs: number[] = [];
    workUrls.map( (url: string, index: number) => {
      if(url.length > 0) { currentTabs.push(index); } 
    });

    let activeIndex;
    if (currentTabs.length === 1) { return false; }

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
      workUrls,
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
    const { history, credentials } = this.props;
    const nonEmptyUrls = workUrls.filter((url:string) =>  url.length > 0);
    return (
      <div>
        <Topbar history={history} title="Tasks" />
        <div className="browser-window">
          <ul className="tab-navs">
            {
              workUrls.map( (url: string, index: number) => {
                return url.length ? (
                <div className="tab-nav-wrapper" key={index} style={{width: `${100 / nonEmptyUrls.length}%`}}>
                  <li className={this.state.activeTab === `tab${index + 1}` ? 'active' : ''} id={`tab${index + 1}`} onClick={this.handleSelect}>{titles[index]}</li>
                  <i className="fas fa-times-circle cross-tab" onClick={() => this.removeTab(index)} />
                </div> ) : null
              })
            }
            <button className="add-tab" onClick={() => this.addTabs()}><i className="fas fa-plus" /></button>
          </ul>
          <div className="tab-body">
            { workUrls.map( (url: string, index: number) => {
              return url.length ? (
                <div key={index} className={this.state.activeTab === `tab${index + 1}` ? 'active' : ''}>
                  <TabContent
                    defaultUrl={url}
                    tabId={`webview${index + 1}`}
                    credentials={credentials[index]}
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
    taskUrls: store.profileState.taskUrls,
    taskTitles: store.profileState.taskTitles,
    credentials: store.profileState.credentials,
  });
}
export default connect(mapStateToProps)(Tasks);