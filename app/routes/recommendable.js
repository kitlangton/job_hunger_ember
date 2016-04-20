import Ember from 'ember';
const {
  get
} = Ember;

export default Ember.Route.extend({


  serialize(model) {
    // debugger
    return {
      pet_type: model.constructor.modelName,
      pet_id: get(model, 'id')
    };
  }
});
