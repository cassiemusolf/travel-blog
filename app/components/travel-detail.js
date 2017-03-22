import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(travel) {
      if (confirm("Are you sure you want to delete {{travel.author}}'s blog?")) {
        this.sendAction('destroyTravel', travel);
      }
    }
  }
});

//IceBox: possibly change confirmation to MODAL style?
