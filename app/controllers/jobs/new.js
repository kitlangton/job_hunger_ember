import Ember from 'ember';

export default Ember.Controller.extend({

  store: Ember.inject.service(),
  companyId: '',

  isEmpty: Ember.computed.empty('title'),
  isValidInput: Ember.computed.not('isEmpty'),
  notSelected: Ember.computed.match('companyId', /^\D*$/),
  isValidSelection: Ember.computed.not('notSelected'),
  isValid: Ember.computed.and('isValidInput', 'isValidSelection'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    selectCompany(id) {
      let company = this.get('model.companies').findBy("id", id);
      this.set('companyId', id);
      this.set('selectedCompany', company);
    },

    createJob(title, company) {
      let job = this.get('store').createRecord('job', {
        company: company,
        title: title
      });
      this.set('title', '');
      job.save();
      this.transitionToRoute('dashboard');
    }
  }
});
