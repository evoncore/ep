var axios = require('axios');
var machinepackSteam = require('machinepack-steam');
var KEY = require('../key');

module.exports = function getFriendList(array, list) {

  machinepackSteam.getFriendList({
    steamid: '76561198064150641', // 76561197960435530
    key: KEY,
    relationship: 'friend'
  }).exec({
    success: function(result) {
      result.list.friends.forEach(function(el) {
        list.push(el.steamid);
      });

      axios.get('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key='+KEY+'&steamids=' + list)
        .then(function(res) {
          array = res.data;
        });
    }
  });

};
