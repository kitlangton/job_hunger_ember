import Ember from 'ember';

export default Ember.Service.extend({
  state: 'closed',
  transitioningTo: null,

  close() {
    if (this.get('transitioningTo') === 'closed') {
      return;
    }
    this.set('transitioningTo', 'closed');

    let state = this.get('state');
    console.log('closing',state);

    if (state === 'open' || state === 'animate-open') {
      this.set('state', 'animate-close');
    } else if (state === 'ooze') {
      this.set('state', 'ooze-close');
      Ember.run.later(this, function() { this.set('state', 'closed'); }, 1000);
    } else {
      // this.set('state', 'closed');
    }
  },

  open() {
    if (this.get('transitioningTo') === 'open') {
      return;
    }
    let state = this.get('state');
    this.set('transitioningTo', 'open');
    console.log('opening',state);

    if (state === 'closed' || state === 'animate-close') {
      this.set('state', 'animate-open');
    } else if (state === 'ooze' || state === 'ooze-close') {
      this.close();
      Ember.run.later(this, this.open, 1000);
    } else {
      this.set('state', 'open');
    }
  },

  ooze() {
    if (this.get('transitioningTo') === 'ooze') {
      return;
    }
    let state = this.get('state');
    console.log('oozing',state);
    this.set('transitioningTo', 'ooze');

    if (state === 'closed' || state === 'animate-close') {
      this.set('state', 'ooze-open');
      Ember.run.later(this, function() { this.set('state', 'ooze'); }, 1000);
    } else if (state === 'open' || state === 'animate-open') {
      this.close();
      Ember.run.later(this, this.ooze, 2000);
    } else {
      this.set('state', 'ooze');
    }
  },

    animatePage(from) {
      let to = Ember.$('.logo').offset();
      let page = Ember.$("<img class='page' src='/page.png'>");
      page.css({
        height: '30px',
        position: 'absolute',
        left: from.left,
        top: from.top
      });
      Ember.$('body').append(page);
      page.velocity({
        top: to.top + 35,
        left: to.left + 60,
        rotateZ: '360deg'
      }, {
        // easing: 'spring',
        duration: 600
      }).velocity({
        opacity: 0,
        rotateZ: '500deg'
      }, {
        easing: 'linear',
        complete: () => {
          page.remove();
        }
      });
    },

});
