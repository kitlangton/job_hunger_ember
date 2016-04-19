import Ember from 'ember';

export default Ember.Service.extend({
  state: 'open',

  close() {
    let state = this.get('state');
    if (state !== 'closed') {
      this.set('state', 'animate-close');
    } else {
      this.set('state', 'closed');
    }
  },

  open() {
    let state = this.get('state');
    if (state !== 'closed') {
      this.set('state', 'animate-open');
    } else {
      this.set('state', 'open');
    }
  }
});
