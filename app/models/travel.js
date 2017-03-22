import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  country: DS.attr(),
  image: DS.attr(),
  summary: DS.attr(),
  category: DS.attr()
});
