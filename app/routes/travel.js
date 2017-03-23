import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('travel', params.travel_id);
  },

  actions: {
    updateTravel(travel, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          travel.set(key,params[key]);
        }
      });
      travel.save();
      this.transitionTo('travel');
    },
    updateComment(comment, params) {
      console.log("Hi");
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key,params[key]);
        }
      });
      comment.save();
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
      var comment_deletions = travel.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function() {
        return travel.destroyRecord();
      });
      this.transitionTo('index');
    },
    destroyComment(comment) {
      console.log("Bye");
      comment.destroyRecord();
      this.transitionTo('travel');
    }
  }
});
