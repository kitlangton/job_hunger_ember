import Ember from 'ember';

export default Ember.Controller.extend({

  name: '',

  actions: {
    selectCompany(id) {

      let company = this.get('model.companies').findBy("id", id);
      this.set('selectedCompany', company);

    }
  }
});
