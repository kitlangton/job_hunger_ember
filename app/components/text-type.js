import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    let delay = this.get('delay');
    this.$('.text').blast({delimiter: 'character'});
    this.$('.text .blast').velocity({opacity: 0}, {duration: 0});
    this.$('.text .blast').velocity('transition.fadeIn', {
      stagger: 50,
      delay: delay
    });

    if (this.get('fade')) {
      this.$('.text .blast').velocity({
        opacity: 0.6,
        duration: 1000
      });
    }
  }
});
