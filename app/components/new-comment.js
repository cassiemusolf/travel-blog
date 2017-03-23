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
        comment: this.get('body'),
        travel: this.get('travel')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
