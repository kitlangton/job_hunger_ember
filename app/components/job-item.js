import Ember from 'ember';

export default Ember.Component.extend({
  statuses: ["Interested", "Applied", "Rejected", "Interview", "Offer"],

  actions: {
    updateJobStatus(value) {
      let jobItem = this.get('jobItem');
      jobItem.set('application_status', value);
      jobItem.save().then(() => {
        jobItem.reload();
      });
    },

    updateUrl(url) {
      let jobItem = this.get('jobItem');
      this.get('jobItem').save().then(() => {
        jobItem.reload();
      });
    }
  }


});