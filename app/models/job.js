import Recommendable from './recommendable';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Recommendable.extend({
  title: attr('string'),
  name: Ember.computed.alias('title'),
  company: belongsTo('company'),
  application_status: attr('string'),
  url: attr('string')
});
