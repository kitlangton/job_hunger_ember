import Ember from 'ember';

export default Ember.Service.extend({
  state: 'closed',
  transitioningTo: null,

  close() {
    if (this.get('transitioningTo') === 'closed') {
      return;
    }
    this.set('transitioningTo', 'closed');

    let state = this.get('state');
    if (state === 'open' || state === 'animate-open') {
      this.set('state', 'animate-close');
    } else if (state === 'ooze') {
      this.set('state', 'ooze-close');
      Ember.run.later(this, function() { this.set('state', 'closed'); }, 1000);
    } else {
      this.set('state', 'closed');
    }

  },

  open() {
    if (this.get('transitioningTo') === 'open') {
      return;
    }
    let state = this.get('state');
    this.set('transitioningTo', 'open');

    if (state === 'closed' || state === 'animate-close') {
      this.set('state', 'animate-open');
    } else if (state === 'ooze') {
      this.close();
      Ember.run.later(this, this.open, 1000);
    } else {
      this.set('state', 'open');
    }
  },

  ooze() {
    if (this.get('transitioningTo') === 'ooze') {
      return;
    }
    this.set('transitioningTo', 'ooze');

    this.set('state', 'ooze-open');
    Ember.run.later(this, function() { this.set('state', 'ooze'); }, 1000);
  }
});
