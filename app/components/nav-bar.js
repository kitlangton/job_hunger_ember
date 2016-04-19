import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service(),
  jobDemon: service(),
  classNames: ['nav-bar'],
  actions: {
    invalidateSession() {
      this.get('invalidateSession')();
    }
  }
});
