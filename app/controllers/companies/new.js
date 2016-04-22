import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),
  isEmpty: Ember.computed.empty('model.name'),
  validInput: Ember.computed.not('isEmpty'),
  isDisabled: Ember.computed.not('validInput'),

  actions: {
    createCompany(model) {
      let currentUser = this.get('sessionAccount.currentUser');

      model.set('user', currentUser);
      model.set('interest', 0);
      model.save();

      this.transitionToRoute('companies.company', model);
    },
  }
});
