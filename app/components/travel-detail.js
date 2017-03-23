import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(travel) {
      if (confirm("Are you sure you want to delete this blog?")) {
        this.sendAction('destroyTravel', travel);
      }
    },
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    }
  }
});

//IceBox: possibly change confirmation to MODAL style?
