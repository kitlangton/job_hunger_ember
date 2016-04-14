import Ember from 'ember';

export default Ember.Controller.extend({

  validEmail: Ember.computed('email', function()  {
    console.log("RUNNING");
    let email = this.get('email');
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }),

  actions: {
    signUp() {
      this.transitionToRoute('/');
    }
  }
});
