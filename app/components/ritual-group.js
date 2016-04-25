import Ember from 'ember';

export default Ember.Component.extend({
  anyRecommendations: Ember.computed.gt('recommendations.length', 0)
});
