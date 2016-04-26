import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  sessionAccount: Ember.inject.service(),
  isEmpty: Ember.computed.empty('model.name'),
  validInput: Ember.computed.not('isEmpty'),
  isDisabled: Ember.computed.not('validInput'),
  errors: DS.Errors.create(),

  validate() {
    console.log('hi')
    this.set('errors', DS.Errors.create());
    if (this.get('isEmpty')) {
      this.get('errors').add('name', "name can't be empty");
    }
    return this.get('errors.isEmpty');
  },

  actions: {
    createCompany(company) {
      if(this.validate()) {
        let currentUser = this.get('sessionAccount.currentUser');

        company.set('interest', 0);
        company.set('user', currentUser);
        company.save().then(() => {
          this.get('sessionAccount.currentUser').reload();
          this.transitionToRoute('companies.company', company);
        });
      }
    }
  }
});
