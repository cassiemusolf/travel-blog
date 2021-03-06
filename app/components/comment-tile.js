import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    updateComment(comment) {
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        body: this.get('body')
      };
      console.log(params);
      this.set('updateCommentForm', false);

      this.sendAction('updateComment', comment, params);
    },
    delete(comment) {
      if (confirm('Are you sure you want to delete?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
