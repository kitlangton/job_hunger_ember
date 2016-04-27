import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  store: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),
  errorList: [],

  validations: {
    'model.name': {
      presence: true,
      presence: { message: "Company name cannot be blank" },
      length: { minimum: 1 }
    }
  },

  actions: {

    createCompany(company) {
      let currentUser = this.get('sessionAccount.currentUser');

      company.set('interest', 0);
      company.set('user', currentUser);

      this.validate().then(() => {
        company.save().then(() => {
          this.get('sessionAccount.currentUser').reload();
          this.transitionToRoute('companies.company', company);
        })
      }).catch(() => {
        let errors = this.get('errors');
        this.set('errorList', this.get('errors').model);
      });
    }
  }
});
