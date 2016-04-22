import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),
  isEmpty: Ember.computed.empty('model.name'),
  validInput: Ember.computed.not('isEmpty'),
  isDisabled: Ember.computed.not('validInput'),

  actions: {
    createCompany(company) {
      let currentUser = this.get('sessionAccount.currentUser');

      company.set('interest', 0);
      company.set('user', currentUser);
      company.save().then(() => {
        this.transitionToRoute('companies.company', company);
      });
    },
  }
});
