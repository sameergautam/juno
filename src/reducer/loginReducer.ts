const response = {
  
};

const loginState = (state = response, action: any) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'LOGIN':
      newState.response = action.payload;
      return newState;
    default: {
      return newState;
    }
  }
}

export default loginState;