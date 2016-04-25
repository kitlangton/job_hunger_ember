import Ember from 'ember';
import ENV from 'job-hunger/config/environment';

const { service }  = Ember.inject;


export default Ember.Controller.extend({

  interest1: '',
  interest2: '',
  zipCode: '',
  hideInterest: false,

  isInterested1: Ember.computed('interest1', function() {
    return this.get('interest1') !== '';
  }),

  // isInterested2: Ember.computed('interest2', function() {
  //   return this.get('interest2') !== '';
  // }),

  didInsertElement() {
    // this.get('backgroundColor').setDark();
    this.get('jobDemon').close();
    Ember.run.later(this, () => {
      this.set('hideInterest', false);
    }, 1500);
  },

  glassdoorAPICall() {
    let base_string = "http://api.glassdoor.com/api/api.htm";

    let partner_str = "t.p=" + "62023"
    let key_str =  "t.k=" + "v2fHKkDtZg"
    let query_str = "q="+ this.get('interest1');
    let location_str = "l=" + this.get('zipCode');
    let radius_str = "r=15";
    let num_results_str = "ps=40";
    let format_str = "format=json";
    let version_str = "v=1";
    let action_str = "action=employers";

    let query_arr = [
      partner_str,
      key_str,
      query_str,
      location_str,
      radius_str,
      num_results_str,
      format_str,
      version_str,
      action_str
    ];

    let request_string = base_string + "?" + query_arr.join("&");

    Ember.$.ajax({
      type: "GET",
      url: request_string,
      dataType: "jsonp",
      success: function(data) {
        console.log(data)
      }
    });
  },    

  actions: {
    submitInterestsAndLocation() {
      let interest1 = this.get('interest1');
      // let interest2 = this.get('interest2');
      let zipCode = this.get('zipCode');

      console.log(interest1);
      // console.log(interest2);
      console.log(zipCode);
      console.log(ENV);

      this.glassdoorAPICall();
    }

  }

});
