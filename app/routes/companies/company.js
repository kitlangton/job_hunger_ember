
// company.js  (show route/view)
import Ember from 'ember';

export default Ember.Route.extend({

  sessionAccount: Ember.inject.service(),

  model(params) {
    console.log('model');
    console.log(params);
    return this.store.findRecord('company', params.company_id);
  },


  actions: {
    // createCompany(model) {
    //   let currentUser = this.get('sessionAccount.currentUser');
    //   model.set('user', currentUser);
    //   model.save();
    //   this.transitionTo('dashboard');
    // }
  }

});
