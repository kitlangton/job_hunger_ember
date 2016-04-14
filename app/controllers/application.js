//app/controllers/application.js
import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
 session: service(),
 sessionAccount: service(),

 actions: {
   invalidateSession(){
     this.get('session').invalidate();
   }
 }
});
