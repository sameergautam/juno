const settings = {
  settings: { FirstName: "" }
};

const settingState = (state = settings, action: any) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'FETCH_SETTINGS':
      newState.settings = action.payload;
      return newState;
    default: {
      return newState;
    }
  }
}

export default settingState;