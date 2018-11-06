// import axios from 'axios';

export const fetchSettings = () =>
  (dispatch: any) => 
    dispatch({ type: 'FETCH_SETTINGS', payload:  { settings: { name: "Aneeta Sharma" } } });
    // return axios.get('/report/holidays')
    //   .then((response) => {
    //     this.setState({ settings: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });