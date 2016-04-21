import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
// const { RSVP } = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin,{

  sessionAccount: Ember.inject.service(),
  session: Ember.inject.service(),

  model() {
    return this.get('sessionAccount').loadCurrentUser().then(()=> {
      let currentUser = this.get('sessionAccount.currentUser');
      if(currentUser) {
        return this.store.findRecord('user', currentUser.get('id'), {include: 'companies,jobs,leads,recommendations'});
      } else {
        this.get('session').invalidate();
        this.transitionTo('login');
      }
    });
  },

  actions: {

    toggleHeart(company) {
      if (company.interest === 1) {
        company.interest = 0;
      } else {
        company.interest = 1;
      }
      company.save();
    },

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
