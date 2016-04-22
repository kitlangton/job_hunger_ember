import Ember from 'ember';

export default Ember.Controller.extend({

  populateRange: [2, 5, 10, 25, 50, 100],
  category_ids: [],
  categories: '',
  radius: 25,
  zip: '',
  meetups: [],

  actions: {
    clickss() {
      console.log(this.get('category_ids'));
    },

    selectCategoryIds(ids) {
      console.log(ids);
      let categories = '' + ids;
      this.set('categories', categories);
    },

    selectRadius(radius) {
      this.set('radius', radius);
    },

    findMeetups() {
      let that = this;
      let radius = this.get('radius');
      let categories = this.get('categories');
      let zip = this.get('zip');

      $.ajax({
        url: 'https://api.meetup.com/2/open_events?&sign=true&photo-host=public&zip=' + zip + '&category=' + categories + '&radius=' + radius + '&page=20&key=707d395716d1d2a7b6d3c6514732343',
        dataType: "jsonp",
        success: function(response) {
          console.log(response);
          that.set('meetups', response.results);
        }
      });
    }
  }

});
