
import { test } from 'qunit';
import moduleForAcceptance from 'job-hunger/tests/helpers/module-for-acceptance';

import startApp from '../helpers/start-app';
import { currentSession, authenticateSession, invalidateSession } from 'job-hunger/tests/helpers/ember-simple-auth';

let App;

module('integration - newcompany', {
  setup: function() {
    App = startApp();
    authenticateSession( App );
  }, 

  teardown: function() {
    Ember.run(App, 'destroy');
  }
});


test('clicking plus button on dashboard goes to new company', function(assert) {
  visit('/');

  click('.logout');
  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
