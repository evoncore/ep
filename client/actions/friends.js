import axios from 'axios';
import config from '../config';

var API = axios.create();

// GET ALL
export function fetchFriends() {
  var request = API.post(config.server + '/api/friends');

  axios.post(config.server + '/api/steam/civ5').then(res => console.log(res));

  return (dispatch) => {
    request
      .then(({data}) => {
        dispatch({ type: 'FETCH_FRIENDS', payload: data.players });
      })
      .catch(function(error) {
        console.log('SERVER_FETCH_FRIENDS', error);
      });
  };
}
