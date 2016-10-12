import axios from 'axios';
import config from '../config';

var API = axios.create();

// GET ALL
export function fetchMessages() {
  var request = API.get(config.server + '/api/messages');

  return (dispatch) => {
    request
      .then(({data}) => {
        dispatch({ type: 'FETCH_MESSAGES', payload: data });
      })
      .catch(function(error) {
        console.log('SERVER_FETCH_MESSAGES', error);
      });
  };
}

// ADD
export function addMessage(message) {

  var request = API.post(config.server + '/api/messages/add', message);

  return (dispatch) => {
    request
      .then((res) => {
        var payload = {
          id: res.data,
          user_name: message.user_name,
          message: message.message
        };

        dispatch({ type: 'ADD_MESSAGE', payload });
      })
      .catch(function(error) {
        console.log('SERVER_ADD_MESSAGE', error);
      });
  }
}

// REMOVE
export function removeMessage(id) {
  var payload = { id: id };
  var request = API.delete(config.server + '/api/message/' + payload.id + '/remove');

  return (dispatch) => {
    request
      .then((res) => {
        dispatch({ type: 'REMOVE_MESSAGE', payload });
      })
      .catch(function(error) {
        console.log('SERVER_REMOVE_MESSAGE', error);
      });
  };
}