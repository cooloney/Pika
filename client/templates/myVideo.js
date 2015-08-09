//Template.myVideo.helpers({
//    videSource:function(){
//        var video=videos.findOne({_id:Session.get("playlist")[Session.get("queue")]});
//        return video.source;
//    }
//});
//
//Template.myVideo.events({
//    "click button":function(event,template){
//        template.find("video").play();
//    },
//    "timeupdate video":function(event,template){
//        console.log(template.find("video").currentTime);
//    }
//});