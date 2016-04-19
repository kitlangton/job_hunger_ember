import Ember from 'ember';

export default Ember.Route.extend({

  sessionAccount: Ember.inject.service(),

  model() {
    let currentUser = this.get('sessionAccount.currentUser');
    return this.store.findRecord('user', currentUser.id, {include: 'companies'});
  },

  actions: {
    createLead(name, company) {

      let lead = this.store.createRecord('lead', {
        company: company,
        name: name
      });
      lead.save();

      // let currentUser = this.get('sessionAccount.currentUser');
      // model.incrementProperty('score');
      // console.log(model);
      // model.save();

      this.transitionTo('dashboard');
    }
  }

});
