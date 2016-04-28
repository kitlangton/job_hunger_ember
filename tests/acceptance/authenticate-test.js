import { test } from 'qunit';
import startApp from '../helpers/start-app';
import { authenticateSession } from 'job-hunger/tests/helpers/ember-simple-auth';

let App;

module('Acceptance - authenticate', {
  setup: function() {
    App = startApp();
    authenticateSession( App );
  }, 

  teardown: function() {
    Ember.run(App, 'destroy');
  }
});


test('visiting root with authentication stays at root', function(assert) {
  visit('/welcome');

  andThen(function() {
    assert.equal(currentURL(), '/welcome');
  });
});

