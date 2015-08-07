AutoForm.hooks({
  'new-post': {
    onSuccess: function (operation, result, template) {
      console.log('Post inserted successfully!');
      /*Router.go('post.show', {_id: 1}, {query: 'q=s', hash: 'hashFrag'});*/
      Router.go('/');
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});