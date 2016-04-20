import Ember from 'ember';
const { RSVP } = Ember;

export default Ember.Route.extend({

  sessionAccount: Ember.inject.service(),

  model() {
    let currentUser = this.get('sessionAccount.currentUser');
    return this.store.findRecord('user', currentUser.id, {include: 'companies,jobs,leads'});
  },

  actions: {

    removeLead(lead) {
      let bool = confirm("Are you sure you want to remove this Lead?");
      if (bool) {
        lead.deleteRecord();
        lead.save();
      }
    },

    removeCompany(company) {
      let bool = confirm("Are you sure you want to remove this Company?");
      if (bool) {
        company.deleteRecord();
        company.save();
      }
    },

    removeJob(job) {
      let bool = confirm("Are you sure you want to remove this Job?");
      if (bool) {
        job.deleteRecord();
        job.save();
      }
    }
  }


});
