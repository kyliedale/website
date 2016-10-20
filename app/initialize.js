window.io = require('socket.io-client');

document.addEventListener('DOMContentLoaded', function init() {
  console.log($('#send'));
  $('#send').click(function() {
    console.log('in click');
  });
});
