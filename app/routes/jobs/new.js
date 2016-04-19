import Ember from 'ember';

export default Ember.Route.extend({

  sessionAccount: Ember.inject.service(),

  model() {
    let currentUser = this.get('sessionAccount.currentUser');
    return this.store.findRecord('user', currentUser.id, {include: 'companies'});
  },

  actions: {
    createJob(title, company) {
      let job = this.store.createRecord('job', {
        company: company,
        title: title
      });
      job.save();
      this.transitionTo('dashboard');
    }
  }
});
