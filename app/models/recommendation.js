import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user'),
  // company: belongsTo('company', { polymorphic: true }),
  // lead: belongsTo('lead', { polymorphic: true }),
  recommendable_type: attr('string'),
  recommendable_id: attr('number'),
  start_date: attr('date'),
  action: attr('string'),
  completed: attr('boolean')
});
