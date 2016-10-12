
function messages(state=[], action) {
  switch(action.type) {

    case 'FETCH_MESSAGES': {
      return action.payload;
      break;
    }

    case 'ADD_MESSAGE': {
      return [...state, action.payload];
      break;
    }

    case 'REMOVE_MESSAGE': {
      var arr = state.filter(el => {
        if (action.payload.id != el.id) {
          return el;
        }
      });

      return state = arr;
      break;
    }

    default: {
      return state;
    }
  }
}

export default messages;