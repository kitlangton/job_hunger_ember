import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wide-input'],
  classNameBindings: ['active:active'],
  type: 'text',

  didInsertElement() {
    if (this.get('hidden')) {
      this.$('.border').css('opacity', 0);
      this.$('').css('display', 'none');
    }
  },

  animate: Ember.observer('hidden', function() {
    if (this.get('hidden')) {
      this.$('.border').velocity('transition.fadeOut');
    } else {
      this.$('').css('display', 'block');
      this.$('.border').velocity('transition.expandIn');
    }
  }),

  active: null,

  actions: {
    activate() {
      this.set('active', true);
    },

    deactivate() {
      this.set('active', false);
    },
  }
});
