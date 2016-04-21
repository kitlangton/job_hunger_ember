import Ember from 'ember';

export default Ember.Controller.extend({

  store: Ember.inject.service(),
  recommendations: Ember.computed('model.recommendations', function() {
    return this.get('model.recommendations');
  }),

  actions: {

    toggleHeart(company) {
      if (company.interest === 1) {
        company.interest = 0;
      } else {
        company.interest = 1;
      }
      company.save();
    },

    updateJob(model) {
      model.save();
    },

    rollback(model) {
      model.notes = model.notes;
    }
  }

});
