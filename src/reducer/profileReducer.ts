const profile = {
  profile: { FirstName: "", LastName: "", email: "", Address: "" }
};

const profileState = (state = profile, action: any) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'FETCH_PROFILE':
      newState.profile = action.payload;
      return newState;
    default: {
      return newState;
    }
  }
}

export default profileState;