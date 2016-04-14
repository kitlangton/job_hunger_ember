import Ember from 'ember';

const { service }  = Ember.inject;

export default Ember.Controller.extend({

  store: service(),

  validEmail: Ember.computed('email', function()  {
    console.log("RUNNING");
    let email = this.get('email');
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }),

  actions: {
    signUp() {
      let email = this.get('email');
      let password = this.get('password');
      let store = this.get('store');

      let user = store.createRecord('user', {
        email: email,
        password: password
      });

      user.save();
    }
  }
});
