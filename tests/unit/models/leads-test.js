import { moduleForModel, test } from 'ember-qunit';

moduleForModel('leads', 'Unit | Model | leads', {
  // Specify the other units that are required for this test.
  needs: ['model:company']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
