import Ember from 'ember';

export default Ember.Controller.extend({

  recommendations: Ember.computed('model.recommendations.@each.completed', function(){
    console.log('computing recommendations');
    return this.get('model.recommendations').filterBy('completed', false).slice(0,3);
  }),

  store: Ember.inject.service(),

  actions: {

    updateLead() {
      this.get('model').save().then(() => {
        this.get('model.recommendations').forEach( rec => {
          rec.reload();
        });
      });
    },

    rollback(model) {
      model.notes = model.notes;
    },

    deleteLead() {
      console.log("trying to delete lead");
      this.get('model').deleteRecord()
      this.transitionToRoute('dashboard');
    },

  }

});
