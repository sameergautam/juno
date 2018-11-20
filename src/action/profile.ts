import axios from 'axios';

export const fetchProfile = () => 
    (dispatch: any) =>
      axios.get('http://ecs-services-1784001078.us-east-1.elb.amazonaws.com/worker/23816d72-9fda-4abf-ac12-f7cbe57b8b86', {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then((response) => {
          dispatch({
            type: 'FETCH_PROFILE',
            payload: response.data
          });
        })
        .catch((error) => {
          console.log(error);
        });