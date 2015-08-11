Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {

  waitOn: function(){
    return Meteor.subscribe('myApps')
  },

  data: function() {
    //return {
    //  photo: Photos.find({}, {sort: {score: -1}, limit: 6})
    //};
    console.log('in data');

          //latLng=Geolocation.latLng();
          var latLng;
          latLng = Session.get('keyLocation');
          if (latLng) {
            console.log('lat in data is '+latLng.lat);
            //Session.set('keyLocation', latLng);
            // return {photo: Photos.find({},{sort: {score: -1}, limit:6})};
            return { photo: Photos.find({
                "loc": {$near: latLng,
                  $maxDistance: 3 / 111.12
                }}, {sort: {time: -1}})};
          }
  },


  action: function() {
    var latLng;
    latLng = Session.get('keyLocation');
    if (latLng) {

      console.log('going to render homepage');
      return this.render('homepage');
    } else {
      console.log('going to render loading page');
      return this.render('loading');
    }
  }
});


Router.route('/ranking', {
  name: 'ranking'
});

Router.route('/detail/:_id', {
  waitOn: function(){
    return Meteor.subscribe('onePhoto', this.params._id)
  },

  data: function(){ 

    return {
      onePhoto: Photos.findOne(this.params._id)
  };
 
  },

  action: function(){
    this.render('detail')
  }
});

Router.route('/decision', {
  name: 'decision'
});

Router.route('/newpage', {
  name: 'newpage'
});

