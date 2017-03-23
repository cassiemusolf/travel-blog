import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('travel', params.travel_id);
  },

  actions: {
    update(travel, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          travel.set(key,params[key]);
        }
      });
      travel.save();
      this.transitionTo('travel');
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var travel = params.travel;
      travel.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return travel.save();
      });
      this.transitionTo('travel', travel);
    },
    destroyTravel(travel) {
      travel.destroyRecord();
      this.transitionTo('index');
    }
  }
});
