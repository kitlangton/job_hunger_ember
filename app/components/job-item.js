import Ember from 'ember';

export default Ember.Component.extend({
  statuses: ["Interested", "Applied", "Rejected", "Interview", "Offer"],

  actions: {
    updateJobStatus(value) {
      let jobItem = this.get('jobItem')
      jobItem.set('application_status', value)
      jobItem.save().then(() => {
        jobItem.reload();
      });
    }
  }
});


// http://stackoverflow.com/questions/35348059/how-do-i-pass-in-more-than-one-paramter-to-the-onchange-action-for-the-select-el