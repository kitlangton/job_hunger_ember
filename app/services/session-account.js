import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
  session: service(),
  store: service(),

  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      const accountId = this.get('session.data.authenticated.id');
      if (!Ember.isEmpty(accountId)) {
        return this.get('store').find('user', accountId).then((account) => {
          this.set('currentUser', account);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});