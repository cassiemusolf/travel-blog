import Ember from 'ember';

export default Ember.Component.extend({
  updateTravelForm: false,
  actions: {
    updateTravelForm() {
      this.set('updateTravelForm', true);
    },
    update(travel) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        country: this.get('country'),
        summary: this.get('summary'),
        image: this.get('image'),
      };
      this.set('updateTravelForm', false);
      this.sendAction('update', travel, params);
    }
  }  
});
