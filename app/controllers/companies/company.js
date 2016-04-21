import Ember from 'ember';

export default Ember.Controller.extend({

  store: Ember.inject.service(),
  recommendations: Ember.computed('model.recommendations', function() {
    return this.get('model.recommendations');
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
