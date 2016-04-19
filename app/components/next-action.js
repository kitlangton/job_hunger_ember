import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['active'],
  classNames: ["next-action"],
  points: 30,
  sentence: "Add a blog for Joe Smith",
  value: null,

  click() {
    this.$('input').focus();
  },

  actions: {
    activate() {
      console.log('activate');
      this.set('active', true);
    },

    deactivate() {
      console.log('deactivate');
      this.set('active', false);
    }
  }

});
