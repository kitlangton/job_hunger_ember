import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sign-up');
  this.route('login');
  // this.route('protected', { path: '/' });
  this.route('dashboard', { path: '' });
  this.route('freestyle');
  this.route('companies', function() {
    this.route('new');
    this.route('company', { path: '/:company_id'});
  });
  this.route('leads', function() {
    this.route('new');
    this.route('lead', { path: '/:lead_id'});
  });

  this.route('jobs', function() {
    this.route('new');
  });

  this.route('recommendable', {path: '/:recommendable_type/:recommendable_id'});
  this.route('meetups', { path: '/meetups' });
});

export default Router;
