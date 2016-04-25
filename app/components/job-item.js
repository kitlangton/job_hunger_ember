import Ember from 'ember';

export default Ember.Component.extend({
  statuses: ["Interested", "Applied", "Rejected", "Interview", "Offer"],

  actions: {
    updateJobStatus(value) {
      let jobItem = this.get('jobItem')
      console.log("made it to updateJobStatus")
      console.log(jobItem.id)
      console.log(value)
    }
  }
});


// http://stackoverflow.com/questions/35348059/how-do-i-pass-in-more-than-one-paramter-to-the-onchange-action-for-the-select-el