import Ember from 'ember';

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
    return this.dummyData;
  },


});


