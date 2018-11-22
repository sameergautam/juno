import axios from 'axios';

export const fetchProfile = () => 
    (dispatch: any) =>
      axios.get('http://wis-ecs-services-425328152.us-east-1.elb.amazonaws.com/worker/' + localStorage.getItem('user_id'), {
        headers: {
          'Authorization': 'Bearer ' +  localStorage.getItem('accessToken')  + " : " +  localStorage.getItem('idToken') 
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