import axios from 'axios';

export const login = () => 
    (dispatch: any) =>
      axios.post('http://localhost:8080/sign_in', {
        email: 'milap@cf.com',
        password: 'Kathmandu09@'
      })
        .then((response) => {
          dispatch({
            type: 'LOGIN',
            payload: response.data
          });
        })
        .catch((error) => {
          console.log(error);
        });