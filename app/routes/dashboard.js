import Ember from 'ember';
const { RSVP } = Ember;

export default Ember.Route.extend({

  sessionAccount: Ember.inject.service(),

  model() {
    return this.store.findRecord('user', currentUser.id, {include: 'companies,jobs,leads'});
  }


});
