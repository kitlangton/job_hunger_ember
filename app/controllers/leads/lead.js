import Ember from 'ember';

export default Ember.Controller.extend({

  store: Ember.inject.service(),

  actions: {

    updateLead(model) {
      model.save();
    },

    rollback(model) {
      model.notes = model.notes;
    }
  }

});
