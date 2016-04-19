import Ember from 'ember';
const { RSVP } = Ember;

export default Ember.Route.extend({

  dummyData: {

    resources: [
      "news.ycombinator.com",
      "steve.jobs@icloud.com",
      "wallstreetjournal.com",
      "Bill Gates: w.gates@hotmail.com",
      "Paul Graham: @cat_pictures",
      "Sergey Brin: 444-555-1212",
    ],

    suggestions:[
      "Email Steve Jobs",
      "Read Hacker News",
      "Learn Ember",
      // "Send out your resume",
      // "Go do that",
      // "Call the recruiter",
      // "Refactor Danebook",
    ],

    company1: "Apple",

    companies: [
      "Apple",
      "Uber",
      "Facebook",
      "Google",
      // "Pets.com",
      // "Goldman Sachs",
      // "Hedge fund"
    ],

    leads: [
      "Kit Langton",
      "Donald Trump",
      "Linus Torvalds",
      "Steve Ballmer",
      // "Eric Smith",
      // "Larry Ellison",
    ],

    jobs: [
      "Software Developer",
      "Concessionaire at Oakland Coliseum",
      "Bike messenger",
      "yoga teacher",
      // "Scrum master",
      // "DBA",
      // "CEO",
    ],

  },

  init() {
    console.log('dashboard');
  },

  model() {
    return RSVP.hash({
      companies: this.store.findAll('company'),
      leads: this.store.query('lead', { include: 'company'} ),
      jobs: this.store.query('job', { include: 'company'} )
    });
  },

  setupController(controller, model) {

    // let currentUser = this.get('sessionAccount.currentUser');
    // console.log('currentUser');
    // console.log(currentUser);

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
