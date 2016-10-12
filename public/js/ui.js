(() => {
  var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
  };

  domReady(() => {

    window.resizeItems = function() {
      document.getElementById('app').style.height = (window.innerHeight - 50) + 'px';
      document.getElementById('friend-list').style.height = (app.clientHeight - 180) + 'px';
      document.getElementById('message-list').style.height = (app.clientHeight - 180) + 'px';
    }

    window.resizeItems();

    window.addEventListener('resize', function() {
      window.resizeItems();
    });
  });

})();