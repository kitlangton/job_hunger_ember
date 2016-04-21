import Ember from 'ember';

export default Ember.Component.extend({

  toggled: true,

  actions: {

    toggler() {
      let toggle = this.get('toggled');

      if (toggle) {
        this.set('toggled', false);
      } else {
        this.set('toggled', true);
      }
    },

    updateCompany() {
      this.get('model').save().then(() => {
        this.get('model.recommendations').forEach( rec => {
          rec.reload();
        });
      });


      let toggle = this.get('toggled');

      if (toggle) {
        this.set('toggled', false);
      } else {
        this.set('toggled', true);
      }
    }
  }

});
