import { test } from 'qunit';
import moduleForAcceptance from 'job-hunger/tests/helpers/module-for-acceptance';

import startApp from '../helpers/start-app';
import { currentSession, authenticateSession, invalidateSession } from 'job-hunger/tests/helpers/ember-simple-auth';

// moduleForAcceptance('Acceptance | sign up', {
//   beforeEach: function(){
//     authenticateSession( startApp() );
//   },
// });

let App;

module('Acceptance - signup', {
  setup: function() {
    App = startApp();
    authenticateSession( App );
  }, 

  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /sign-up', function(assert) {
  visit('/sign-up');

  andThen(function() {
    assert.equal(currentURL(), '/sign-up');
    // assert.equal(currentURL(), '/login');
  });
});

// test('password field not visible until valid email address entered', function(assert) {
//   visit('/sign-up');
//
//   fillIn('#email', 'blah');
//
//   andThen(() => {
//     assert.equal(find('.password-input.hidden').length, 1);
//   });
// });

// test('logged out user should be redirected to the sign in page', function(assert) {
//   visit('/dashboard');

//   andThen(() => {
//     assert.equal(currentURL(), '/login');
//   });
// });
