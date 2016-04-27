import { test } from 'qunit';
import moduleForAcceptance from 'job-hunger/tests/helpers/module-for-acceptance';

import startApp from '../helpers/start-app';
import { currentSession, authenticateSession, invalidateSession } from 'job-hunger/tests/helpers/ember-simple-auth';

let App;

module('Acceptance - authenticate', {
  setup: function() {
    App = startApp();
  }, 

  teardown: function() {
    Ember.run(App, 'destroy');
  }
});



test('visiting root without authentication', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

