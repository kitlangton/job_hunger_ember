import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['dark-ritual'],
  jobDemon: Ember.inject.service(),
  recAction: "Find a blog",
  // query: "Khan+Academy+company+blog",

  query: Ember.computed('recommendation.query', function() {
    let query = this.get('recommendation.query');
    if (query) {
      return query.split(' ').join('+');
    }
  }),

  label: Ember.computed('recommendation.field', function() {
    let field = this.get('recommendation.field');
    if (field) {
      return field.split('_').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    }
  }),

  didInsertElement() {
    this.$().css('opacity',0);
    this.$().velocity('transition.fadeIn', { duration: 1000});
  },

  fadeOut() {
      this.$().velocity('transition.fadeOut');

      let demon = this.get('jobDemon');
      this.set('processing', true);
      demon.ooze();
      Ember.run.later(demon, demon.open, 5000);
  },

  actions: {

    focus(huh) {
      this.$('.wide-input input').focus();
      window.open('http://www.google.com/#q=' + this.get('query'), '_blank');
    },

    save() {
      let recommendation = this.get('recommendation');
      this.get('recommendation.recommendable').then((recommendable) => {
        let field = this.get('recommendation.field');
        recommendable.set(field, this.get('value'));
        this.fadeOut();
        recommendable.save().then(() => {
          recommendation.reload();
        });
      });
    },

    complete() {
      this.$().velocity('transition.fadeOut');
      // let recommendation = this.get('recommendation');
      // recommendation.set('completed', true);
      // recommendation.save();

      let demon = this.get('jobDemon');
      this.set('processing', true);
      demon.ooze();
      Ember.run.later(demon, demon.open, 5000);
    }
  }
});
