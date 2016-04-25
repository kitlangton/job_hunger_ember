import Ember from 'ember';
import ENV from 'job-hunger/config/environment';

const { service }  = Ember.inject;


export default Ember.Controller.extend({

  interest1: '',
  interest2: '',
  zipCode: '',
  hideInterest: false,

  isInterested1: Ember.computed('interest1', function() {
    return this.get('interest1') !== '';
  }),

  isInterested2: Ember.computed('interest2', function() {

    return this.get('interest2') !== '';
  }),


  didInsertElement() {
    // this.get('backgroundColor').setDark();
    this.get('jobDemon').close();
    Ember.run.later(this, () => {
      this.set('hideInterest', false);
    }, 1500);
  },

  actions: {
    submitInterestsAndLocation() {
      let interest1 = this.get('interest1');
      let interest2 = this.get('interest2');
      let zipCode = this.get('zipCode');

      console.log(interest1);
      console.log(interest2);
      console.log(zipCode);
      console.log(ENV);
    },
  }

});
