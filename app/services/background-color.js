import Ember from 'ember';

export default Ember.Service.extend({

  setVeryDark() {
    Ember.$('html').addClass('very-dark');
  },

  setDark() {
    Ember.$('html').addClass('dark');
    var nbDrop = 1458;

    // function to generate a random number range.
    function randRange( minNum, maxNum) {
      return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }

    // function to generate drops
    let height = window.innerHeight;
    var delay = 100;
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

  setLight() {
    Ember.$('html').removeClass('dark');
    Ember.$('html').removeClass('very-dark');
  }
});
