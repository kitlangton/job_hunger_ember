import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service(),
  jobDemon: service(),
  classNames: ['nav-bar'],

  didInsertElement() {
    this.$().velocity({
      opacity: 0,
      // translateY: -10
    }, 0);
    this.$().velocity({
      opacity: 1,
    }, 500);
  },

  actions: {
    invalidateSession() {
      this.get('invalidateSession')();
    }
  }
});
