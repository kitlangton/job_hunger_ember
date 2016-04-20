import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    goToRecommendable(recommendation) {
      recommendation.get('recommendable').then((recommendable) => {
        this.transitionToRoute('recommendable');
      });
    }
  }
});
