import Ember from 'ember';

export default Ember.Route.extend({

  sessionAccount: Ember.inject.service(),

  model() {
    return this.store.createRecord('company');
  },

  actions: {
    createCompany(model) {
      let currentUser = this.get('sessionAccount.currentUser');
      model.set('user', currentUser);
      model.save();
      this.transitionTo('dashboard');
    }
  }
});
