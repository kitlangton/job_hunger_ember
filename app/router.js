import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sign-up');
  this.route('login');
  // this.route('protected', { path: '/' });
});

export default Router;
