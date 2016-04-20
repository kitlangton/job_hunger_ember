import Ember from 'ember';

export default Ember.Controller.extend({
  recommendations: Ember.computed('model.recommendations', function(){
    return this.get('model.recommendations').slice(0,3)
  }),

  actions: {
    goToRecommendable(recommendation) {
      recommendation.get('recommendable').then((recommendable) => {
        this.transitionToRoute('recommendable');
      });
    }
  }

});
