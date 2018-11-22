import axios from 'axios';

export const fetchProfile = () =>
  (dispatch: any) =>
    axios.get('http://wis-ecs-services-425328152.us-east-1.elb.amazonaws.com/worker/' + localStorage.getItem('userId'), {
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
({
  type: 'FETCH_TASKS',
  payload: {
    tasks: ['https://expensify.com', 'https://ibotta.com', 'https://youtube.com']
  }
});