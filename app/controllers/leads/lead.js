import Ember from 'ember';

export default Ember.Controller.extend({

  recommendations: Ember.computed('model.recommendations.@each.completed', function(){
    return this.get('model.recommendations').filterBy('completed', false);
  }),

  store: Ember.inject.service(),

  actions: {

    saved() {
      this.get('model.recommendations').reload();
    },

    updateLead() {
      this.get('model').save().then(() => {
        this.get('model.recommendations').forEach( rec => {
          rec.reload();
        });
      });
    },

    rollback(model) {
      model.notes = model.notes;
    },

    deleteLead() {
      let lead = this.get('model');
      let bool = confirm("Are you sure you want to remove this Lead?");
      if (bool) {
        lead.deleteRecord();
        lead.save();
        this.transitionToRoute('dashboard');
      }
    },

  }

});
