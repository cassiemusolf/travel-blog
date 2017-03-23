import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(travel) {
      if (confirm("Are you sure you want to delete this blog?")) {
        this.sendAction('destroyTravel', travel);
      }
    },
    updateComment(comment) {
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        body: this.get('body')
      };
      console.log(params);
      this.set('updateCommentForm', false);
      debugger;
      this.sendAction('updateComment', comment, params);
    },
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    }
  }
});

//IceBox: possibly change confirmation to MODAL style?
