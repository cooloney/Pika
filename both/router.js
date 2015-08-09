Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {

  waitOn: function(){
    return Meteor.subscribe('myApps')
  },

  data: function(){ 
    return {
      photo: Photos.find({},{sort: {score: -1}, limit:6})
    };
  },

  action: function(){
    this.render('homepage')
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

Router.route('/userAccounts', {
  name: 'userAccounts'
});

Router.route('/decision', {
  name: 'decision'
});

Router.route('/newpage', {
  name: 'newpage'
});

