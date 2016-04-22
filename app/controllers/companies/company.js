import Ember from 'ember';

export default Ember.Controller.extend({
  dashboardController: Ember.inject.controller('dashboard'),

  store: Ember.inject.service(),

  recommendations: Ember.computed('model.recommendations.@each.completed', function(){
    console.log('computing recommendations');
    return this.get('model.recommendations').filterBy('completed', false).slice(0,3);
  }),

  actions: {
    toggleHeart(company, interest) {
      this.get('dashboardController').send('toggleHeart', company, interest)
    },

    updateJob(model) {
      model.save();
    },

    rollback(model) {
      model.notes = model.notes;
    }
  }

});
