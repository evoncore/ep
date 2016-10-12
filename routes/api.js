var express = require('express');
var router = express.Router();
var axios = require('axios');
var getFriendsList = require('../steam/actions/getFriendList');

var M_LIST = [
  {
    id: 1,
    user_name: 'Vladimir',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam totam eos deleniti enim, delectus, beatae provident iusto, voluptatibus quod ipsam veniam voluptates! Totam laudantium cumque vitae accusamus vel voluptatum adipisci, quo soluta, perspiciatis harum rem reiciendis consequatur molestiae veritatis sequi suscipit, sit! Architecto molestias nemo sequi perspiciatis, esse numquam a!'
  },
  {
    id: 2,
    user_name: 'David',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ratione vero voluptates sed, porro, quo.'
  },
  {
    id: 3,
    user_name: 'Lilya',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit cupiditate expedita minus molestiae? Tempora rem dolorum quis eligendi nobis.'
  },
  {
    id: 4,
    user_name: 'Jora',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit cupiditate expedita minus molestiae? Tempora rem dolorum quis eligendi nobis.'
  },
  {
    id: 5,
    user_name: 'Vitya',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: 6,
    user_name: 'Ruslan',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora rem dolorum quis eligendi nobis.'
  },
  {
    id: 7,
    user_name: 'Alex',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: 8,
    user_name: 'Jenya',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora rem dolorum quis eligendi nobis.'
  }
];

var friends;
var friendList = [];

console.log(getFriendsList);

router
  .get('/messages', function(req, res, next) {
    res.send(JSON.stringify(M_LIST));
    res.end();
  })
  .post('/messages/add', function(req, res, next) {
    M_LIST.push(req.body);
    res.end();
  })
  .delete('/messages/:id/remove', function(req, res, next) {
    M_LIST = M_LIST.filter(el => {
      if (req.params.id != el.id) {
        return el;
      }
    });
    res.end();
  })
  .post('/friends', function(req, res, next) {
    res.send(friends.response);
    res.end();
  })
  .post('/steam/civ5', function(req, res) {
    res.json(friends.response);
    res.end();
  });

module.exports = router;
