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
  }
});
