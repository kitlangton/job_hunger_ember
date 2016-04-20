import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
// const { RSVP } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin,{

  sessionAccount: Ember.inject.service(),

  model() {
    return this.get('sessionAccount').loadCurrentUser().then(()=> {
      let currentUser = this.get('sessionAccount.currentUser');
      return this.store.findRecord('user', currentUser.id);
    });
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
