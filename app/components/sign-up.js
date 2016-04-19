import Ember from 'ember';

const { service }  = Ember.inject;

export default Ember.Component.extend({
  session: service(),
  store: service(),
  jobDemon: service(),
  backgroundColor: service(),
  email: null,
  password: null,

  didInsertElement() {
    this.get('backgroundColor').setDark();
    this.get('jobDemon').close();
  },

  willDestroyElement() {
    this.get('backgroundColor').setLight();
    this.get('jobDemon').open();
  },

  validEmail: Ember.computed('email', function()  {
    let email = this.get('email');
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(email);
  }),

  actions: {
    signUp() {
      let email = this.get('email');
      let password = this.get('password');

      Ember.$.ajax({
        type: "POST",
        url: '/users',
        data: {
          email: email,
          password: password
        }
      }).then( () => {
        this.get('session').authenticate('authenticator:devise', email, password);
      });
    },

    animate() {
      let open = this.get('jobDemon.open');
      this.set('jobDemon.open', !open);
      console.log(open);
    }
  }
});
