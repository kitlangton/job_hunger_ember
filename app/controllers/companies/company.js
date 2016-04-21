import Ember from 'ember';

export default Ember.Controller.extend({

  store: Ember.inject.service(),

  recommendations: Ember.computed('model.recommendations.@each.completed', function(){
    console.log('computing recommendations');
    return this.get('model.recommendations').filterBy('completed', false).slice(0,3);
  }),

  actions: {

    updateJob(model) {
      model.save();
    },

    rollback(model) {
      model.notes = model.notes;
    }
  }

});
