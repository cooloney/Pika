Template.homepage.helpers({
	oneImage: function () {
        var id = this.picture;
        // console.log(id);
        return Images.findOne({_id: id});
    },

    username: function () {                          //登录时的用户名显示
        return Meteor.user().username;
    },

    avatarUrl: function () {
        var email = Meteor.user().emails[0].address;
        console.log(email);
        var options = {
            secure: false // choose between `http://www.gravatar.com`
                         //            and `https://secure.gravatar.com`
                         //            default is `false`
        };

        var url = Gravatar.imageUrl(email, options)
        console.log(url);
        return url;
    }
});

Template.homepage.events({

  'click .dislike': function(){
  	var id = this._id;
    Photos.update({_id:id}, {$inc: {score: -1} });
	},

	'click .like': function(){
  	var id = this._id;
    Photos.update({_id:id}, {$inc: {score: 1} });
	},

});


