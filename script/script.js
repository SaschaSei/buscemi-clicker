$(function(){

/*buscemiStorage[id, filename, click counter]
*/
  var model ={
    curentBuscemi: 0,
    buscemis: [
        {
          name: "buscemi1",
          url: "buscemi1.jpg",
          clickCount: 0,
        },
        {
          name: "buscemi2",
          url: "buscemi2.jpg",
          clickCount: 0
        },
        {
          name: "buscemi3",
          url: "buscemi3.jpg",
          clickCount: 0
        },
        {
          name: "buscemi4",
          url: "buscemi4.jpg",
          clickCount: 0
        },
        {
          name: "buscemi5",
          url: "buscemi5.jpg",
          clickCount: 0
        }
      ]
    };

  var octopus = {
    init: function() {
      view.init();
    },

    getBuscemis: function() {
      return model.buscemis;
    }
  };

  var view = {
    init: function(){
      var element;
      this.sidebar = document.getElementById('sidebar');
      var buscemis = octopus.getBuscemis();
      buscemis.forEach(function(buscemi) {
        element = document.createElement('img');
        element.src = "img/" + buscemi.url;
        element.className = "sidebar-img";
        this.sidebar.appendChild(element);
      });
    }
  };

  octopus.init();
});
