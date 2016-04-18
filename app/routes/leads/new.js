import Ember from 'ember';

export default Ember.Route.extend({

  sessionAccount: Ember.inject.service(),

  model() {
    return this.store.createRecord('lead');
  },

  actions: {
    createLead(model) {
      let currentUser = this.get('sessionAccount.currentUser');
      model.set('user', currentUser);
      model.save();
      this.transitionTo('dashboard');
    }
  }

});
