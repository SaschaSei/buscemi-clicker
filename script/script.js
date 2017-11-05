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
    inAdminMode : false,

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
    },

    getAdminMode: function(){
      return this.inAdminMode;
    },

    switchAdminMode: function(){
     if(this.inAdminMode){
       this.inAdminMode = false;
     } else {
       this.inAdminMode = true;
     }
    }
  };

  var view = {

    init: function(){
      //Vars for HTML elements for later use.
      this.sidebar = document.getElementById('sidebar');
      this.buscemiName = document.getElementById('buscemi-name');
      this.mainImg = document.getElementById('mainImg');
      this.counter = document.getElementById('counter');
      this.adminBtn = document.getElementById('adminBtn');

      this.adminBtn.addEventListener('click', function(){
        console.log(octopus.inAdminMode);
        view.renderAdminMode(octopus.getAdminMode());
        octopus.switchAdminMode();
      });

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

    //Renders or removes admin move depending on "inAdminMode" boolean.
    renderAdminMode: function(inAdminMode){
      this.formParent = document.getElementById('formParent');
      if(!inAdminMode){
        form = document.createElement('form');
        form.id = "form";

        nameLbl = document.createElement('label');
        nameLbl.textContent = "Name: ";

        nameFld = document.createElement('input');
        nameFld.type = "textField";
        nameFld.value = octopus.getCurrentBuscemi().name;

        urlLbl = document.createElement('label');
        urlLbl.textContent = "URL: ";


        urlFld = document.createElement('input');
        urlFld.type = "textField";
        urlFld.value = octopus.getCurrentBuscemi().url;


        counterLbl = document.createElement('label');
        counterLbl.textContent = "Counter: ";

        counterFld = document.createElement('input');
        counterFld.type = "textField";
        counterFld.value = octopus.getCurrentBuscemi().clickCount;

        cancelBtn = document.createElement('button');
        cancelBtn.textContent = "Cancel"

        submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.textContent = 'Submit';


        form.appendChild(nameLbl);
        form.appendChild(nameFld);
        form.appendChild(urlLbl);
        form.appendChild(urlFld);
        form.appendChild(counterLbl);
        form.appendChild(counterFld);
        form.appendChild(cancelBtn);
        form.appendChild(submitBtn);

        this.formParent.appendChild(form);
      } else {
        this.formParent.removeChild(form);
      }
    }
  };

  octopus.init();
});
