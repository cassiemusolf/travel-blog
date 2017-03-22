import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateTravelForm: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(travel, params) {
      this.sendAction('update', travel, params);
    },
    delete(travel) {
      if (confirm('Are you sure you want to delete this blog post?')) {
        this.sendAction('destroyTravel', travel);
      }
    }
  }
});
