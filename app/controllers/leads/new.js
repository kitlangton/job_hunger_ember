import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {

  store: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),
  selectedCompany: '',

  validations: {
    'model.name': {
      presence: true,
      length: { message: "can't be blank (minimum is 1 character)" }
    },
    'model.companyId': {
      presence: true,
      presence: { message: "please select a company" }
    }
  },

  actions: {
    selectCompany(id) {
      let company = this.get('model.user.companies').findBy("id", id);
      console.log(company);
      this.set('model.companyId', id);
      this.set('selectedCompany', company);
    },

    createLead(name, company) {
      let lead = this.get('store').createRecord('lead', {
        company: company,
        name: name
      });
      this.set('name', '');
      this.validate().then(() => {
        lead.save().then(() => {
          this.get('sessionAccount.currentUser').reload();
          this.transitionToRoute('leads.lead', lead);
        })
      }).catch(() => {
        console.log(this.get('errors').model)
        this.set('errorList', this.get('errors').model);
      });
    }
  }
});
