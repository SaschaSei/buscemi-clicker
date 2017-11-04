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
      console.log(this.getCurrentBuscemi());
    },

    getBuscemis: function() {
      return model.buscemis;
    },

    getCurrentBuscemi: function() {
      return model.currentBuscemi;
    },

    setCurrentBuscemi: function(buscemi) {
      model.currentBuscemi = buscemi;
    },

    incrementCounter: function(){
      model.currentBuscemi.clickCount++;
      console.log(this.getCurrentBuscemi.clickCount);
    }
  };

  var view = {
    inAdminMode: false,

    init: function(){
      //Vars for HTML elements for later use.
      this.sidebar = document.getElementById('sidebar');
      this.buscemiName = document.getElementById('buscemi-name');
      this.mainImg = document.getElementById('mainImg');
      this.counter = document.getElementById('counter');

      //Sets main image and texts. Sets event listener for main image.
      var cBuscemi = octopus.getCurrentBuscemi();
      this.buscemiName.textContent = cBuscemi.name;
      this.mainImg.src = "img/" + cBuscemi.url;
      this.counter.textContent = cBuscemi.clickCount + " Times Clicked";
      this.mainImg.addEventListener('click', function(){
        octopus.incrementCounter();
        view.renderMainImg();
      })
      this.renderSidebar();
      this.renderMainImg();
    },

    renderSidebar: function(){
      var element;
      var buscemis = octopus.getBuscemis();

      //Iterates through model and creates sidebar images including event listeners
      buscemis.forEach(function(buscemi) {
        element = document.createElement('img');
        element.src = "img/" + buscemi.url;
        element.className = "sidebar-img ";
        element.addEventListener('click', function(buscemiCopy){
          return function(){
            octopus.setCurrentBuscemi(buscemiCopy);
            view.renderMainImg();
          }
        }(buscemi));
        this.sidebar.appendChild(element);
      })
    },

    renderMainImg: function(){

      //Gets current buscemi and sets properties of the main image and text
      var cBuscemi = octopus.getCurrentBuscemi();
      this.buscemiName.textContent = cBuscemi.name;
      this.mainImg.src = "img/" + cBuscemi.url;
      this.counter.textContent = cBuscemi.clickCount + " Times Clicked";
    },

    renderAdminMode: function(){

    },

    unrenderAdminMode: function(){

    }
  };

  octopus.init();
});
