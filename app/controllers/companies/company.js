import Ember from 'ember';

export default Ember.Controller.extend({
  dashboardController: Ember.inject.controller('dashboard'),

  store: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),

  recommendations: Ember.computed('model.recommendations.@each.completed', function(){
    return this.get('model.recommendations').filterBy('completed', false);
  }),

  actions: {
    toggleHeart(company, interest) {
        if (interest === 1) {
          company.set('interest', 0);
        } else {
          company.set('interest', 1);
        }
        company.save();
    },

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
    },

    deleteCompany() {
      let company = this.get('model');
      let bool = confirm("Are you sure you want to remove this Company?");
      if (bool) {
        company.deleteRecord();
        company.save();
        this.transitionToRoute('dashboard');
      }
    },
  }
});
