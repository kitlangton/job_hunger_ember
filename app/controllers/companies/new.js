import Ember from 'ember';

export default Ember.Controller.extend({

  isEmpty: Ember.computed.empty('model.name'),
  validInput: Ember.computed.not('isEmpty'),
  isDisabled: Ember.computed.not('validInput'),

});
