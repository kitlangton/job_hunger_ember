import Ember from 'ember';

export default Ember.Route.extend({


  model(params) {
    console.log('model');
    return this.store.findRecord('lead', params.lead_id, {include: 'companies'});
  }

});
