const allUsers = (state = [], action) => {
  console.log(action.payload);
  if (action.type === 'SET_ALL_USERS') {
    return action.payload;
  } else {
    return state;
  }
};

// user will be on the redux state at:
// state.user
export default allUsers;
