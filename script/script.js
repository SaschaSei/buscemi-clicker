$(function(){

/*buscemiStorage[id, filename, click counter]
*/
  var model ={
    currentBuscemi: null,
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
      model.currentBuscemi = model.buscemis[0];
      view.init();
    },

    getBuscemis: function() {
      return model.buscemis;
    },

    getCurrentBuscemi: function() {
      return model.currentBuscemi;
    }
  };

  var view = {
    init: function(){
      this.sidebar = document.getElementById('sidebar');
      this.buscemiName = document.getElementById('buscemi-name');
      this.mainImg = document.getElementById('mainImg');
      this.counter = document.getElementById('counter');
      this.renderSidebar();
      this.renderMainImg();
    },

    renderSidebar: function(){
      var element;
      var buscemis = octopus.getBuscemis();
      buscemis.forEach(function(buscemi) {
        element = document.createElement('img');
        element.src = "img/" + buscemi.url;
        element.className = "sidebar-img";
        this.sidebar.appendChild(element);
      })
    },

    renderMainImg: function(){
      var cBuscemi = octopus.getCurrentBuscemi();
      console.log(cBuscemi)
      this.buscemiName.textContent = cBuscemi.name;
      this.mainImg.src = "img/" + cBuscemi.url;
      this.counter.textContent = cBuscemi.clickCount + " Times Clicked";
    }
  };

  octopus.init();
});
