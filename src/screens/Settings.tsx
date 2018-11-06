// import axios from 'axios';
import * as React from 'react';

class Settings extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      settings: {}
    };
  }

  public componentWillMount() {
    this.fetchSettings();
  }

  public fetchSettings() {
    // return axios.get('/report/holidays')
    //   .then((response) => {
    //     this.setState({ settings: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    return this.setState({ settings: { name: "Aneeta Sharma" } });
  }

  public render() {
    const { settings } = this.state;

    return (
      <div>
        <h2>Settings</h2>
        Name: { settings.name }
      </div>
    );
  }
}

export default Settings;
