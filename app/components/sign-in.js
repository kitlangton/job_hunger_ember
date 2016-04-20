import Ember from 'ember';

const {service} = Ember.inject;

export default Ember.Component.extend({
  session: service(),
  sessionAccount: service(),
  jobDemon: service(),

  didInsertElement() {
    this.get('jobDemon').open();
  },

  actions: {
    authenticate() {
      let {email, password} = this.getProperties('email', 'password');
      this.get('session').authenticate('authenticator:devise', email, password);
    }
  }
});
