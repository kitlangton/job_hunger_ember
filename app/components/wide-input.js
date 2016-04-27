import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
  classNames: ['wide-input'],
  classNameBindings: ['active', 'light', 'present', 'narrow', 'small'],
  type: 'text',
  errors: DS.Errors.create(),

  didInsertElement() {
    if (this.get('hidden')) {
      this.$('.border').css('opacity', 0);
      this.$('').css('display', 'none');
    } else {
      this.$('.border').css('opacity', 0);
      this.$('.border').velocity('transition.fadeIn');
    }
  },

  present: Ember.computed.gte('value.length', 1),

  animate: Ember.observer('hidden', function() {
    if (this.get('hidden')) {
      this.$('.border').velocity('transition.fadeOut');
    } else {
      this.$('').css('display', 'block');
      this.$('.border').velocity('transition.expandIn');
    }
  }),

  active: null,

  click() {
    if(this.get('editable')) {
      if (!this.get('editing')) {
        this.set('editing', true);
        Ember.run.later(this, function() {
          this.$('.border').velocity('transition.expandIn');
          this.$('input').focus();
        }, 100);
      }
    }
  },

  validate() {
    this.set('errors', DS.Errors.create());
    if (this.get('value') === '' || this.get('value') === undefined) {
      this.get('errors').add('value', "can't be empty");
    }
    return this.get('errors.isEmpty');
  },

  actions: {
    activate() {
      this.set('active', true);
    },

    deactivate() {
      this.set('active', false);
    },

    enterPressed() {
      if(this.validate()) {
        let func = this.get('enterPressed');
        if (this.get('editable')) {
          this.set('editing', false);
        }
        if (func) {
          func();
        }
      }
    }
  }
});
