const user = {
  profile: { email: ''},
  tasks: [],
  loginOptions: [],
  taskTitles: [],
};

const profileState = (state = user, action: any) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'FETCH_PROFILE':
      newState.profile.email = action.payload.email;
      return newState;
    case 'FETCH_TASKS':
      console.log(action);
      newState.tasks = action.payload.task_urls;
      newState.loginOptions = action.payload.login_options;
      newState.taskTitles = action.payload.task_urls.map(() => 'New Tab');
      return newState;
    default: {
      return newState;
    }
  }
}

export default profileState;