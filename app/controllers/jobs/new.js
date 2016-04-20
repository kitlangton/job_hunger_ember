import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectCompany(id) {

      let company = this.get('model.companies').findBy("id", id);
      this.set('selectedCompany', company);
    }
  }
});
