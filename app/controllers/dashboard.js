import Ember from 'ember';

export default Ember.Controller.extend({
  recommendations: Ember.computed('model.recommendations.@each.completed', function(){
    return this.get('model.recommendations').filterBy('completed', false).slice(0,3);
  }),
});
