import Ember from 'ember';

export default Ember.Controller.extend({
  dashboardController: Ember.inject.controller('dashboard'),

  store: Ember.inject.service(),

  recommendations: Ember.computed('model.recommendations.@each.completed', function(){
    return this.get('model.recommendations').filterBy('completed', false).slice(0,3);
  }),

  actions: {
    saved() {
      this.get('model.recommendations').reload();
    },

    updateCompany() {
      this.get('model').save().then(() => {
        this.get('model.recommendations').forEach( rec => {
          rec.reload();
        });
      });
    },

    rollback(model) {
      model.notes = model.notes;
    }
  }
});
