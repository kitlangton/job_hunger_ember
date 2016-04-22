import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
  session: service(),
  jobDemon: service(),
  store: service(),

  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      const uid = this.get('session.data.authenticated.uid');
      if (!Ember.isEmpty(uid)) {
        return this.get('store').query('user', { filter: { email: uid  } } ).then(account => {
          this.set('currentUser', account.get('firstObject'));
          console.log("LOADING CURRENT");
          this.get('jobDemon').open();
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});
