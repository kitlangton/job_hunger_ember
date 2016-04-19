import Ember from 'ember';

export default Ember.Service.extend({
  state: null,

  close() {
    let state = this.get('state');
    if (state === 'open' || state === 'animate-open') {
      this.set('state', 'animate-close');
    } else {
      this.set('state', 'closed');
    }
  },

  open() {
    let state = this.get('state');
    if (state === 'closed' || state === 'animate-close') {
      this.set('state', 'animate-open');
    } else {
      this.set('state', 'open');
    }
  }
});
