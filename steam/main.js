
var Steam = require('steam');
var steamClient = new Steam.SteamClient();
var steamUser = new Steam.SteamUser(steamClient);

steamClient.connect();

steamClient.on('connected', function() {
  steamUser.logOn({
    account_name: '',
    password: ''
  });
});

steamClient.on('logOnResponse', function(e) {
  console.log(e);
});