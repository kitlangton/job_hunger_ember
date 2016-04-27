import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {

  store: Ember.inject.service(),
  errorList: [],

  validations: {
    'model.title': {
      presence: true,
      length: { message: "can't be blank (minimum is 1 character)" }
    },
    'model.companyId': {
      presence: true,
      presence: { message: "please select a company" }
    }
  },

  actions: {
    selectCompany(id) {
      let company = this.get('model.user.companies').findBy("id", id);
      this.set('model.companyId', id);
      this.set('selectedCompany', company);
    },

    createJob(title, company) {
      this.validate().then(() => {
        let job = this.get('store').createRecord('job', {
          company: company,
          title: title
        });
        job.save().then(() => {
          this.set('model.title', '');
          this.transitionToRoute('dashboard');
        })
      }).catch(() => {
        this.set('errorList', this.get('errors').model);
      })
    }
  }
});
