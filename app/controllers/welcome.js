import Ember from 'ember';
import ENV from 'job-hunger/config/environment';

const { service }  = Ember.inject;


export default Ember.Controller.extend({

  interest1: '',
  interest2: '',
  zipCode: '',
  hideInterest: false,
  calledGlassdoor: false,
  companies: [],
  sessionAccount: Ember.inject.service(),
  // selectedCompanies: [],

  haveCompanies: Ember.computed('companies', function() {
    return this.get('companies').length > 0;
  }),

  isInterested1: Ember.computed('interest1', function() {
    return this.get('interest1') !== '';
  }),

  hasSelectedCompany: Ember.computed('selectedCompanies', function(){

  }),

  didInsertElement() {
    // this.get('backgroundColor').setDark();
    this.get('jobDemon').close();
    Ember.run.later(this, () => {
      this.set('hideInterest', false);
    }, 1500);
  },

  glassdoorAPICall() {
    console.log('glassdoor call')
    let that = this;

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
    console.log( request_string );

    Ember.$.ajax({
      type: "GET",
      url: request_string,
      dataType: "jsonp",
      success: function(data) {
        // console.log(data);
        that.set('companies', data.response.employers);
        that.set('calledGlassdoor', true);
        // console.log(data.response.employers);
      }
    });
  },    

  actions: {
    submitInterestsAndLocation() {
      let interest1 = this.get('interest1');
      let zipCode = this.get('zipCode');

      let currentUser = this.get('sessionAccount.currentUser');
      currentUser.set('defaultKeyword', interest1);
      currentUser.set('defaultLocation', zipCode);
      currentUser.save().then((response) => {
        // console.log('trying to save');
        // console.log(response);
      });

      this.glassdoorAPICall();
    },


    createCompany(company) {


      let currentUser = this.get('sessionAccount.currentUser');
      // console.log(currentUser);
      let newCompany = this.store.createRecord('company');

      newCompany.set('user', currentUser);
      newCompany.set('name', company.name)
      newCompany.save().then((response) => {
        // console.log('trying to save');
        // console.log(response);
      });

      // this.selectedCompanies.push( company.name );
      // console.log( selectedCompanies );
    },

    allDone() {
      let currentUser = this.get('sessionAccount.currentUser');
      currentUser.set('hasOnboarded', true);
      currentUser.save().then((response) => {
        // console.log('trying to save');
        // console.log(response);
        
        console.log("attempt trans");
        this.transitionToRoute('dashboard');
      });
    },


  }

});
