import Ember from 'ember';
const { RSVP } = Ember;

export default Ember.Route.extend({

  sessionAccount: Ember.inject.service(),

  model() {
    let currentUser = this.get('sessionAccount.currentUser');

    return this.store.findRecord('user', currentUser.id, {include: 'companies,jobs,leads'});
  },

  setupController(controller, model) {

    let suggestions = [];
    let companyName = model.companies.content[0]._data.name;
    suggestions.push( "Follow " + companyName + " on Twitter.");

    let leadName = model.leads.content[0]._data.name;
    suggestions.push( "Email " + leadName + ".");

    let jobName = model.jobs.content[0]._data.title;
    suggestions.push( "Apply for  " + jobName + " job.");

    controller.set('suggestions', suggestions);

  },


});
