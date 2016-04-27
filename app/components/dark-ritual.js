import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  classNames: ['dark-ritual'],
  jobDemon: Ember.inject.service(),
  store: Ember.inject.service(),
  backgroundColor: Ember.inject.service(),
  attributeBindings: ['data-ritual-id'],
  recAction: "Find a blog",
  errorList: [],

  validations: {
    'value': {
      presence: true,
      presence: { message: "can't be blank" }
    }
  },

  isActionable: Ember.computed('recommendation.kind', function() {
    let kind = this.get('recommendation.kind');
    return kind === 'action';
  }),

  query: Ember.computed('recommendation.query', function() {
    let query = this.get('recommendation.query');
    if (query) {
      return encodeURI(query);
    }
  }),

  link: Ember.computed('recommendation.link', function() {
    let link = this.get('recommendation.link');
    if (!link) {
      return;
    }
    if (link.match(/https?:\/\//)) {
      return link;
  } else {
    return "http://" + link;
  }
  }),

  label: Ember.computed('recommendation.field', function() {
    let field = this.get('recommendation.field');
    let label = this.get('recommendation.label');
    if (label) {
      return label;
    } else if (field) {
      return field.split('_').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    }
  }),

  didInsertElement() {
    this.$('.page').velocity('transition.expandIn');
  },

  fadeOut() {
    let from = this.$('.page').offset();
    this.$().velocity('transition.fadeOut');
    this.get('jobDemon').animatePage(from);
    let demon = this.get('jobDemon');
    this.set('processing', true);
    demon.ooze();
    Ember.run.later(demon, demon.open, 5000);
  },

  isShowModal: false,

  actions: {

    focus() {
      this.$('.wide-input input').focus();
      window.open('http://www.google.com/#q=' + this.get('query'), '_blank');
    },

    save() {
      this.validate().then(() => {
        let recommendation = this.get('recommendation');
        let kind = recommendation.get('kind');

        this.get('recommendation.recommendable').then((recommendable) => {

          if (kind === 'edit') {
            let field = this.get('recommendation.field');
            recommendable.set(field, this.get('value'));
            this.fadeOut();
            recommendable.save().then(() => {
              this.get('saved')();
              recommendation.reload();
            });
          } else if (kind === 'create') {
            let field = this.get('recommendation.field');
            let newObject = recommendable.get(field).createRecord({ name: this.get('value') });
            this.fadeOut();
            newObject.save().then(() => {
              this.get('saved')();
            });
            recommendation.set('completed', true);
            recommendation.save();
          }
        });
      }).catch(() => {
        this.set('errorList', this.get('errors'));
      });
    },

    complete() {
      this.$('input').blur();
      this.set('recommendation.completed', true);
      this.get('recommendation').save().then(() => {
        this.get('saved')();
      });
      this.fadeOut();
    },

    showModal() {
      this.toggleProperty('isShowModal');
    },
  }
});
