import JSONAPIAdapter from 'ember-data/adapters/json-api';
import CustomDataAdapterMixin from '../mixins/custom-data-adapter-mixin';

export default JSONAPIAdapter.extend(CustomDataAdapterMixin, {
  authorizer: 'authorizer:application'
});
