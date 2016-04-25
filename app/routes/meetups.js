import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.ajax({
      url: 'https://api.meetup.com/2/topic_categories?&sign=true&photo-host=public&page=20&key=707d395716d1d2a7b6d3c6514732343',
      dataType: "jsonp"
    });
  },
});
