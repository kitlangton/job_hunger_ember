
// company.js  (show route/view)
import Ember from 'ember';

export default Ember.Route.extend({

  sessionAccount: Ember.inject.service(),

  model(params) {
    console.log('model');
    return this.store.findRecord('company', params.company_id, {include: 'leads,jobs'});
  },

  // actions: {
  //   toggleHeart(model, interest) {
  //     if (interest === 1) {
  //       model.interest = 0;
  //     } else {
  //       model.interest = 1;
  //     }
  //     model.save();
  //   },
  // }

});
