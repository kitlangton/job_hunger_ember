import { test } from 'qunit';
import moduleForAcceptance from 'job-hunger/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sign up');

test('visiting /sign-up', function(assert) {
  visit('/sign-up');

  andThen(function() {
    assert.equal(currentURL(), '/sign-up');
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

test('logged out user should be redirected to the sign in page', function(assert) {
  visit('/dashboard');

  andThen(() => {
    assert.equal(currentURL(), '/login');
  });
});
