import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        comment: this.get('comment')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
