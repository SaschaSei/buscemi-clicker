$(function(){

/*buscemiStorage[id, filename, click counter]
*/
  var model ={
    init: function(){
      if(!buscemiStorage) {
        var buscemiStorage = [];
        for(var i = 1; i < 6; i++) {
          var tripel = ["buscemi" + i, "buscemi" + i +".jpg", 0];
          buscemiStorage.push(tripel);
        }

      }
    },

    increment: function() {

    },

    getAllBuscemis: function() {
      console.log(buscemiStorage);
      return buscemiStorage;
    }
  };

  var octopus = {
    init: function() {
      model.init();
      view.init();
    },

    getBuscemis: function() {
      return model.getAllBuscemis();
    }
  };

  var view = {
    init: function(){
      this.sidebar = $('.sidebar');
      var buscemis = octopus.getBuscemis();
      buscemis.forEach(function(buscemi) {
        this.sidebar.appen('<img class="sidebar-img" src="img/"' + buscemi[1] + '>');
      });
    }
  };

  octopus.init();
});
