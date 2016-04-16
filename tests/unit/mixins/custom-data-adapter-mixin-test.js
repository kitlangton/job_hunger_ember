import Ember from 'ember';
import CustomDataAdapterMixinMixin from 'job-hunger/mixins/custom-data-adapter-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | custom data adapter mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let CustomDataAdapterMixinObject = Ember.Object.extend(CustomDataAdapterMixinMixin);
  let subject = CustomDataAdapterMixinObject.create();
  assert.ok(subject);
});
