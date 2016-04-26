import Ember from 'ember';

export default Ember.Controller.extend({
  dashboardController: Ember.inject.controller('dashboard'),

  store: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),

  recommendations: Ember.computed('model.recommendations.@each.completed', function(){
    return this.get('model.recommendations').filterBy('completed', false).slice(0,3);
  }),

  actions: {
    updateCompany() {
      this.get('model').save();
    },

    rollback(model) {
      model.notes = model.notes;
    },

    deleteCompany() {
      console.log("trying to delete company");

      this.get('model').deleteRecord()
      this.transitionToRoute('dashboard');
    },
    
  }
});
