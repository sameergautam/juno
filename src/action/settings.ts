import axios from 'axios';

export const fetchSettings = () => 
    // dispatch({ type: 'FETCH_SETTINGS', payload:  { settings: { name: "Aneeta Sharma" } } });
    (dispatch: any) =>
      axios.get('http://localhost:8000/hello')
        .then((response) => {
          dispatch({
            type: 'FETCH_SETTINGS',
            payload: response.data
          });
        })
        .catch((error) => {
          console.log(error);
        });