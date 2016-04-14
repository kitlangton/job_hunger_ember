import { test } from 'qunit';
import moduleForAcceptance from 'job-hunger/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sign up');

test('visiting /sign-up', function(assert) {
  visit('/sign-up');

  andThen(function() {
    assert.equal(currentURL(), '/sign-up');
  });
});

test('should be able to sign up', function(assert) {
  visit('/sign-up');

  fillIn('#email', 'foo@bar.com');
  fillIn('#password', '123123123');
  click('button.submit');

  andThen(() => {
    assert.equal(currentURL(), '/');
  });
});

test('password field not visible until valid email address entered', function(assert) {
  visit('/sign-up');

  fillIn('#email', 'blah');

  andThen(() => {
    assert.equal(find('.password-input.hidden').length, 1);
  });
});
