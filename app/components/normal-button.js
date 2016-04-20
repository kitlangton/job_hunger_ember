import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    this.$().css('opacity', 0);
    this.$().velocity('transition.fadeIn');
  },

  actions: {
    click() {
      console.log('clicked');
      this.get('onClick')();
    }
  }
});
