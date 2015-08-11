Meteor.publishComposite('myApps', function() {
    return {
        find: function() {
            // Find posts made by user. Note arguments for callback function
            // being used in query.
            return Photos.find({},{sort: {score: -1}, limit:6});
            //var l;
            //console.log('in publish');
            //console.log(l);
            //l = Session.get('keyLocation');
            //if (l) {
            //    return Photos.find({
            //        "loc": {
            //            $near: l,
            //            $maxDistance: 300 / 111.12
            //        }
            //    }, {
            //        sort: {
            //            time: -1
            //        }
            //    });
            //}
        },
        children: [
            {
                 find: function(photo) {
                    // Find post author. Even though we only want to return
                    // one record here, we use "find" instead of "findOne"
                    // since this function should return a cursor.
                    return Images.find({ _id: photo.picture });
                }
            }
        ]
    }
});


Meteor.publishComposite('onePhoto', function(pid) {
    return {
        find: function() {
            // Find posts made by user. Note arguments for callback function
            // being used in query.
            return Photos.find({_id: pid});
        },
        children: [
            {
                 find: function(photo) {
                    // Find post author. Even though we only want to return
                    // one record here, we use "find" instead of "findOne"
                    // since this function should return a cursor.
                    return Images.find({ _id: photo.picture });
                }
            }
        ]
    }
});