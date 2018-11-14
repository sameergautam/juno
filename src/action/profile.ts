import axios from 'axios';

export const fetchProfile = () => 
    // dispatch({ type: 'FETCH_PROFILE', payload:  { settings: { name: "Aneeta Sharma" } } });
    (dispatch: any) =>
      axios.get('http://ecs-services-1784001078.us-east-1.elb.amazonaws.com/worker/2d30cdd7-dea8-41f7-9aa7-260ea8f3bfee')
      // axios.get('http://localhost:8000/hello')
        .then((response) => {
          dispatch({
            type: 'FETCH_PROFILE',
            payload: response.data
          });
        })
        .catch((error) => {
          console.log(error);
        });