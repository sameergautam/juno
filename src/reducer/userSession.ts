const user = {
  profile: { email: '', fullname: ''},
  tasks: [],
  loginOptions: [],
  taskTitles: [],
  workingMode: false,
};

const profileState = (state = user, action: any) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'FETCH_PROFILE':
      newState.profile.email = action.payload.email;
      newState.profile.fullname = action.payload.fullname;
      return newState;
    case 'FETCH_TASKS':
      newState.tasks = action.payload.task_urls;
      newState.loginOptions = action.payload.login_options;
      newState.taskTitles = action.payload.task_urls.map(() => 'New Tab');
      return newState;
    case 'SWITCH_WORK_MODE':
      newState.workingMode = action.payload;
      return newState;
    default: {
      return newState;
    }
  }
}

export default profileState;
