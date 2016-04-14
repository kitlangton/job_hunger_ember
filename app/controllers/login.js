import Ember from 'ember';

const {service} = Ember.inject;

export default Ember.Controller.extend({
  session: service(),
  sessionAccount: service(),

  actions: {
    authenticate() {
      let {email, password} = this.getProperties('email', 'password');
      this.get('session').authenticate('authenticator:devise', email, password);
    }
  }
});