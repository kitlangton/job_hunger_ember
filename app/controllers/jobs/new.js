import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({

  store: Ember.inject.service(),
  companyId: '',
  errors: DS.Errors.create(),

  isEmpty: Ember.computed.empty('title'),
  isValidInput: Ember.computed.not('isEmpty'),
  notSelected: Ember.computed.match('companyId', /^\D*$/),
  isValidSelection: Ember.computed.not('notSelected'),
  isValid: Ember.computed.and('isValidInput', 'isValidSelection'),
  isDisabled: Ember.computed.not('isValid'),

  validate() {
    this.set('errors', DS.Errors.create());
    if (this.get('isEmpty')) {
      this.get('errors').add('title', "title can't be empty");
    }
    if(this.get('notSelected')) {
      this.get('errors').add('company', "select a company")
    }
    return this.get('errors.isEmpty');
  },

  actions: {
    selectCompany(id) {
      let company = this.get('model.companies').findBy("id", id);
      this.set('companyId', id);
      this.set('selectedCompany', company);
    },

    createJob(title, company) {
      if(this.validate()) {
        let job = this.get('store').createRecord('job', {
          company: company,
          title: title
        });
        this.set('title', '');
        job.save();
        this.transitionToRoute('dashboard');
      }
    }
  }
});
