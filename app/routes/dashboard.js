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
      "Go do that",
      "Email Steve Jobs",
      "Read Hacker News",
      "Learn Ember",
      "Send out your resume",
      "Call the recruiter",
      "Refactor Danebook",
    ],

    company1: "Apple",


    companies: [
      "Apple",
      "Uber",
      "Facebook",
      "Google",
      "Pets.com",
      "Goldman Sachs",
      "Hedge fund"
    ],

    leads: [
      "Eric Smith",
      "Kit Langton",
      "Larry Ellison",
      "Steve Ballmer",
      "Linus Torvalds",
      "Donald Trump"
    ],

    jobs: [
      "Software Developer",
      "Concessionaire at Oakland Coliseum",
      "Bike messenger",
      "DBA",
      "CEO",
      "Scrum master",
      "yoga teacher",
    ],

  },

  init() {
    console.log('dashboard');
  },

  model() {
    return this.dummyData;
    // return {
    //   suggestion: "Go do that"
    // };
  },


});
