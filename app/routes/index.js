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
    },

    update(travel, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
        travel.set(key,params[key]);
        }
      });
      travel.save();
      this.transitionTo('index');
    },

    destroyTravel(travel) {
      travel.destroyRecord();
      this.transitionTo('index');
    }
  }
});
