import Ember from 'ember';

export default Ember.Controller.extend({

  store: Ember.inject.service(),

  actions: {
    selectCompany(id) {

      let company = this.get('model.companies').findBy("id", id);
      this.set('selectedCompany', company);
    },

    createLead(name, company) {
      let lead = this.get('store').createRecord('lead', {
        company: company,
        name: name
      });
      this.set('name', '');
      lead.save();
      this.transitionToRoute('dashboard');
    }
  }
});
