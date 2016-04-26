import Ember from 'ember';

export default Ember.Controller.extend({

  populateRange: [2, 5, 10, 25, 50, 100],
  category_ids: [],
  text: '',
  radius: 25,
  zip: '',
  meetups: [],

  convertTimestamp: function(timestamp) {
    var d = new Date(timestamp),	// Convert the passed timestamp to milliseconds
      yyyy = d.getFullYear(),
      mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
      dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
      hh = d.getHours(),
      h = hh,
      min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
      ampm = 'AM',
      time,

      day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()],
      month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][d.getMonth()];

    if (hh > 12) {
      h = hh - 12;
      ampm = 'PM';
    } else if (hh === 12) {
      h = 12;
      ampm = 'PM';
    } else if (hh == 0) {
      h = 12;
    }

    // ie: 2013-02-18, 8:35 AM
    time = [day + ', ' + month + ' ' + dd,  h + ':' + min + ' ' + ampm];

    return time;
  },

  actions: {

    selectRadius(radius) {
      this.set('radius', radius);
    },

    findMeetups() {
      let that = this;
      let radius = this.get('radius');
      let text = this.get('text');
      let zip = this.get('zip');
      let timeStamp = this.get('convertTimestamp');
      console.log('https://api.meetup.com/2/open_events?&sign=true&photo-host=public&zip=' + zip + '&text=' + text + '&radius=' + radius + '&page=20&key=707d395716d1d2a7b6d3c6514732343');
      $.ajax({
        url: 'https://api.meetup.com/2/open_events?&sign=true&photo-host=public&zip=' + zip + '&text=' + text + '&radius=' + radius + '&page=20&key=707d395716d1d2a7b6d3c6514732343',
        dataType: "jsonp",
        success: function(response) {
          console.log(response);
          let parsedResponse = [];

          response.results.forEach(function(element){
            var obj = {
              group: element.group.name,
              name: element.name,
              distance: Math.floor(element.distance),
              date: timeStamp(element.time)[0],
              time: timeStamp(element.time)[1],
              event_url: element.event_url,
              yes_rsvp_count: element.yes_rsvp_count
            };
            parsedResponse.push(obj);
          });
          that.set('model', parsedResponse);
        }
      });
    }
  }

});
