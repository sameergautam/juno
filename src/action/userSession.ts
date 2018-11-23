import axios from 'axios';

export const fetchProfile = () =>
  (dispatch: any) =>
    axios.get('http://hs-ecs-services-1167733196.us-east-1.elb.amazonaws.com/worker/' + localStorage.getItem('userId'), {
      headers: {
        'Authorization': localStorage.getItem('auth'),
      }
    })
    .then((response) => {
      console.log(response);
      dispatch({
        type: 'FETCH_PROFILE',
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });

export const fetchTasks = () =>
  (dispatch: any) =>
    axios.get('http://hs-ecs-services-1167733196.us-east-1.elb.amazonaws.com/worker/' + localStorage.getItem('userId')+ '/tasks', {
      headers: {
        'Authorization': localStorage.getItem('auth'),
      }
    })
    .then((response) => {
      console.log(response);
      dispatch({
        type: 'FETCH_TASKS',
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
