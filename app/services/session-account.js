import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
  session: service(),
  store: service(),

  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      const uid = this.get('session.data.authenticated.uid');
      if (!Ember.isEmpty(uid)) {
        return this.get('store').query('user', { filter: { email: uid  } } ).then(account => {
          this.set('currentUser', account.get('firstObject'));
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});
