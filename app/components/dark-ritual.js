import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['dark-ritual'],
  jobDemon: Ember.inject.service(),

  actions: {
    complete() {
      this.$().velocity('transition.fadeOut');
      if (this.get('processing')) {
        return;
      }
      let recommendation = this.get('recommendation');
      recommendation.set('completed', true);
      recommendation.save();

      let demon = this.get('jobDemon');
      this.set('processing', true);
      demon.ooze();
      Ember.run.later(demon, demon.open, 5000);
      Ember.run.later(this, () => { this.set('processing', false);}, 5000);
    }
  }
});
