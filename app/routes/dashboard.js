import Ember from 'ember';

export default Ember.Route.extend({

  dummyData: {

    // suggestion1:"Go do that",
    // suggestion2:"Email Steve Jobs",
    // suggestion3:"Read Hacker News",
    // suggestion4:"Learn Ember",
    // suggestion5:"Send out your resume",
    // suggestion6:"Call the recruiter",
    // suggestion7:"Refactor Danebook",

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
