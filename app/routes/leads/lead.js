import Ember from 'ember';

export default Ember.Route.extend({

  sessionAccount: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('lead', params.lead_id);
  },

});
