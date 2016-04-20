import Ember from 'ember';

export default Ember.Service.extend({

  setVeryDark() {
    this.set('state', 'dark');
    Ember.$('html').addClass('very-dark');
  },

  setDark() {
    this.set('state', 'dark');
    Ember.$('html').addClass('dark');
    var nbDrop = 1458;

    // function to generate a random number range.

    this.rainDrop();
    // function to generate drops
    // for(var i=1;i<nbDrop;i++) {
    //   var dropLeft = randRange(0,screen.width);
    //   var dropTop = -90;
    //
    //   let drop = Ember.$('<div class="drop" id="drop'+i+'"></div>');
    //   Ember.$('.rain').append(drop);
    //   drop.css({
    //     top: dropTop,
    //     left: dropLeft
    //   });
    //   drop.velocity({
    //     translateY: height - 0
    //   }, {
    //     duration: 1000,
    //     delay: delay,
    //     complete: () => {
    //       drop.velocity({
    //         scaleY: 0,
    //         // opacity: 0
    //       }, 50);
    //       Ember.run.later(drop, drop.remove, 200);
    //   }});
    //   delay += 50;
    // }
  },


  rainDrop() {
    let state = this.get('state');
    if (state !== 'dark') {
      return;
    }

    let height = window.innerHeight;

    function randRange( minNum, maxNum) {
      return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }

    var dropLeft = randRange(0,screen.width);
    var dropTop = -90;

    let drop = Ember.$('<div class="drop"></div>');
    Ember.$('.rain').append(drop);
    drop.css({
      top: dropTop,
      left: dropLeft
    });
    drop.velocity({
      translateY: height - 0
    }, {
      duration: 1000,
      complete: () => {
        drop.velocity({
          scaleY: 0,
          // opacity: 0
        }, 50);
        Ember.run.later(drop, drop.remove, 200);
      }
    });
    Ember.run.later(this, this.rainDrop, 50);
  },

  setLight() {
    this.set('state', 'light');
    Ember.$('html').removeClass('dark');
    Ember.$('html').removeClass('very-dark');
  }
});
