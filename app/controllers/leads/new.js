import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['defaultCompanyId', 'defaultCompanyName'],
  store: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),

  companyId: '',
  isEmpty: Ember.computed.empty('name'),
  isValidInput: Ember.computed.not('isEmpty'),
  notSelected: Ember.computed.match('companyId', /^$/),
  isValidSelection: Ember.computed.not('notSelected'),
  isValid: Ember.computed.and('isValidInput', 'isValidSelection'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    selectCompany(id) {
      let company = this.get('model.companies').findBy("id", id);
      this.set('companyId', id);
      // this.set('selectedCompany', company);
    },

    createLead(name) {
      let company;
      if(this.get('companyId') !== '') {
        company = this.get('model.companies').findBy("id", this.get('companyId'));
      } else {
        company = this.get('model.companies').findBy("id", this.get('defaultCompanyId'));
      }

      let lead = this.get('store').createRecord('lead', {
        company: company,
        name: name
      });
      this.set('name', '');
      lead.save().then(() => {
        this.get('sessionAccount.currentUser').reload();
        this.transitionToRoute('leads.lead', lead);
      });
    }
  }
});
