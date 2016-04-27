import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['span'],

  formattedLink: Ember.computed('link', function() {
    let link = this.get('link');
    if (!link) {
      return;
    }
    if (link.match(/https?:\/\//)) {
      return link;
  } else {
    return "http://" + link;
  }
  }),

});
