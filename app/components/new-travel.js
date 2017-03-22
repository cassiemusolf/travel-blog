import Ember from 'ember';

export default Ember.Component.extend({
  addNewTravel: false,
  actions: {
    travelFormShow() {
      this.set('addNewTravel', true);
    },

    saveTravel() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        country: this.get('country'),
        summary: this.get('summary'),
        image: this.get('image'),
      };
      this.set('addNewTravel', false);
      this.sendAction('saveTravel', params);
    }
  }
});
