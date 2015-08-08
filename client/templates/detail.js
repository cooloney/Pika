Template.detail.helpers({
  oneImage: function () {
        var id = this.picture;
        console.log(id);
        return Images.findOne({_id: id});
    },
});

Template.detail.events({

  'click .dislike': function(){
  	var id = this._id;
    Photos.update({_id:id}, {$inc: {score: -1} });
	},

	'click .like': function(){
  	var id = this._id;
    Photos.update({_id:id}, {$inc: {score: 1} });
	},

});