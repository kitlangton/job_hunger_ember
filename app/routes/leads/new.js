import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('company');
  },

  actions: {
    createLead(model) {
      console.log("gets here");

      let lead = this.store.createRecord('lead', {
        company_id: model.company_id,
        name: model.name
      });
      lead.save();
      this.transitionTo('dashboard');
    }
  }
});
