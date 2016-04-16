import JSONAPIAdapter from 'ember-data/adapters/json-api';
import CustomDataAdapterMixin from '../mixins/custom-data-adapter-mixin';

export default JSONAPIAdapter.extend(CustomDataAdapterMixin, {
  namespace: "api/v1",
  authorizer: 'authorizer:application'
});
