import Ember from 'ember';

export default Ember.Component.extend({

  fadeText: Ember.observer('fade', function() {
    if(this.get('fade')) {
      this.$('.text .blast').velocity({
        opacity: 0.6,
      }, {
        duration: 2000,
        delay: 200,
      });
    } else {
      this.$('.text .blast').velocity({
        opacity: 1,
      }, {
        duration: 2000,
        delay: 200,
      });
    }
  }),

  didInsertElement() {
    this.$('.text').css('opacity', 0);
    let delay = this.get('delay');
    this.$('.text').blast({delimiter: 'character'});
    this.$('.text .blast').css({opacity: 0});
    this.$('.text').css('opacity', 1);
    this.$('.text .blast').velocity('transition.fadeIn', {
      stagger: 50,
      delay: delay,
      complete: () => {
        if( this.$('.focus') ) {
          this.$('.focus').velocity({
            color: '#88F',
            // borderBottomWidth: '1px'
          });
        }
      }
    });

    if (this.get('fade')) {
      this.$('.text .blast').velocity({
        opacity: 0.6,
      }, {
        duration: 2000,
        delay: 200,
      });
    }
  }
});
