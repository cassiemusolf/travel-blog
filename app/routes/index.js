import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('travel');
  },

  actions: {
    saveTravel(params) {
      var newTravel = this.store.createRecord('travel', params);
      newTravel.save();
      this.transitionTo('index');
    }
  }
});
