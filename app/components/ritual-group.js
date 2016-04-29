import Ember from 'ember';

export default Ember.Component.extend({
  moreThanFourRecommendations: Ember.computed.gte('recommendations.length', 4),

  showingMoreRecommendations: Ember.computed('numberOfRecommendations', function() {
    let numberOfRecommendations = this.get('numberOfRecommendations');
    return numberOfRecommendations === 6;
  }),

  numberOfRecommendations: 3,

  displayedRecommendations: Ember.computed('recommendations', 'numberOfRecommendations', function() {
    let numberOfRecommendations = this.get('numberOfRecommendations');
    return this.get('recommendations').slice(0,numberOfRecommendations);
  }),

  actions: {
    showMoreRecommendations() {
      this.set('numberOfRecommendations', 6);
    },

    showFewerRecommendations() {
      this.set('numberOfRecommendations', 3);
    },
  }
});
