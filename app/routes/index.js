import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return Ember.RSVP.hash({
    all: this.store.findAll('travel'),
    travel: this.store.query('travel', {limitToLast:3}),

  });
},

  actions: {
    saveTravel(params) {
      var newTravel = this.store.createRecord('travel', params);
      newTravel.save();
      this.transitionTo('index');
    }
  }
});
// console.log(this.model());
