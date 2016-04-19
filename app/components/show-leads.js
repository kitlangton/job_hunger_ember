import Ember from 'ember';

export default Ember.Component.extend({
  model(params) {
    console.log('model');
    return this.store.findAll('jobs');
  }
});
