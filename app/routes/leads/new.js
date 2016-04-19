import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('company');
  },

  actions: {
    createLead(name, companyId) {
      let lead = this.store.createRecord('lead', {
        company_id: companyId,
        name: name
      });
      lead.save();
      this.transitionTo('dashboard');
    }
  }

});
