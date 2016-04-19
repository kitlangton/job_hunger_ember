
// company.js  (show route/view)
import Ember from 'ember';

export default Ember.Route.extend({

  sessionAccount: Ember.inject.service(),

  model(params) {
    console.log('model');
    return this.store.findRecord('company', params.company_id, {include: 'leads,jobs'});
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
