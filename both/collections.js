Photos = new Mongo.Collection("photos")
// 大写的东西是在内存里的，小写的是表单

Photos.attachSchema(new SimpleSchema({
  // userId:{
  //   type:String,
  //   autoValue:function(){
  //     if (this.isSet){
  //       return;
  //     }
  //     if (this.isInsert){
  //       return Meteor.userId();
  //     }else{
  //       this.unset();
  //     }
  //   }
  // },
  
  description: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked',
      placeholder: 'Description'
    }
  },

  //photographer: {
  //  type: String,
  //  max: 50,
  //  autoform: {
  //    'label-type': 'stacked',
  //    placeholder: "photographer"
  //  }
  //},

   cameraModel: {
    type: String,
    max: 50,
    autoform: {
      'label-type': 'stacked',
      placeholder: "Camera Model"
    }
  },

   location: {
    type: String,
    max: 50,
    autoform: {
      'label-type': 'stacked',
      placeholder: "Location"
    }
  },

  score: {
    type: Number,
    defaultValue: 0
  },

  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        label: 'Choose file'
      }
    }
  },

}));
