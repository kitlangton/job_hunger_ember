import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {

  queryParams: ['defaultCompanyId', 'defaultCompanyName'],
  store: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),
  selectedCompany: '',

  validations: {
    'model.name': {
      presence: true,
      presence: { message: "lead can't be blank" },
      length: { minimum: 1 }
    },
    'model.companyId': {
      presence: true,
      presence: { message: "please select a company" }
    }
  },

  actions: {
    selectCompany(id) {
      this.set('model.companyId', id);
    },

    createLead(name) {

      if (this.get('model.companyId')) {
        let company = this.get('model.user.companies').findBy("id", this.get('model.companyId'));
        this.set('selectedCompany', company);
      } else if (this.get('defaultCompanyId')) {
        let company = this.get('model.user.companies').findBy("id", this.get('defaultCompanyId'));
        this.set('selectedCompany', company);
        this.set('model.companyId', this.get('defaultCompanyId'));
      }

      let lead = this.get('store').createRecord('lead', {
        company: this.get('selectedCompany'),
        name: name
      });
      this.validate().then(() => {
        lead.save().then(() => {
          this.set('model.name', '');
          this.set('model.companyId', '');
          this.get('sessionAccount.currentUser').reload();
          this.transitionToRoute('leads.lead', lead);
        })
      }).catch(() => {
        this.set('errorList', this.get('errors').model);
      });
    }

  }
});
