import JSONAPIAdapter from 'ember-data/adapters/json-api';
import CustomDataAdapterMixin from '../mixins/custom-data-adapter-mixin';
import ENV from 'job-hunger/config/environment';

export default JSONAPIAdapter.extend(CustomDataAdapterMixin, {
  host: ENV['devise-url'],
  authorizer: 'authorizer:application'
});
