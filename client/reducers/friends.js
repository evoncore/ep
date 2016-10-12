
function friends(state=[], action) {
  switch(action.type) {

    case 'FETCH_FRIENDS': {
      return action.payload;
      break;
    }

    default: {
      return state;
    }
  }
}

export default friends;