import Ember from 'ember';
import ENV from 'job-hunger/config/environment';

const { service }  = Ember.inject;

export default Ember.Component.extend({
  session: service(),
  store: service(),
  jobDemon: service(),
  backgroundColor: service(),
  email: null,
  password: '',
  hideEmail: true,

  didInsertElement() {
    this.get('backgroundColor').setDark();
    this.get('jobDemon').close();
    Ember.run.later(this, () => {
      this.set('hideEmail', false);
    }, 5500);
  },

  willDestroyElement() {
    this.get('backgroundColor').setLight();
    this.get('jobDemon').open();
  },

  invalidEmail: Ember.computed.not('validEmail'),

  validEmail: Ember.computed('email', function()  {
    let email = this.get('email');
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }),

  passwordTooShort: Ember.computed('password', function() {
    console.log('short');
    let password = this.get('password');
    if (password.length < 9) {
      return true;
    }
    return false;
  }),

  oozeTheCase: Ember.observer('passwordLengthValid', function() {
    console.log('oozetheCase');
    if (this.get('oozing')) {
      return;
    }
    if (this.get('passwordLengthValid')) {
      this.get('jobDemon').ooze();
      this.get('backgroundColor').setVeryDark();
      this.set('oozing', true);
    }
  }),

  passwordLengthValid: Ember.computed.not('passwordTooShort'),

  validPassword: Ember.computed('password', 'passwordConfirmation', function() {
    let password = this.get('password');
    let passwordConfirmation = this.get('passwordConfirmation');
    var valid = true;
    if (password.length < 9) {
      valid = false;
    } else if (password !== passwordConfirmation) {
      valid = false;
    }
    return valid;
  }),

  actions: {
    signUp() {
      let email = this.get('email');
      let password = this.get('password');

      console.log(ENV);

      Ember.$.ajax({
        type: "POST",
        url: ENV['devise-url'] + '/auth/',
        data: {
          email: email,
          password: password
        }
      }).then( () => {
        this.get('session').authenticate('authenticator:devise', email, password);
      });
    },

    ooze() {
      this.get('jobDemon').ooze();
    },

    open() {
      this.get('jobDemon').open();
    },

    close() {
      this.get('jobDemon').close();
    },

    animate() {
      let open = this.get('jobDemon.open');
      this.set('jobDemon.open', !open);
      console.log(open);
    }
  }
});
