const user = {
  profile: { email: ''},
  tasks: []
};

const profileState = (state = user, action: any) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'FETCH_PROFILE':
      newState.profile.email = action.payload.email;
      return newState;
    case 'FETCH_TASKS':
      console.log(action);
      newState.tasks = action.payload.tasks;
      return newState;
    default: {
      return newState;
    }
  }
}

export default profileState;