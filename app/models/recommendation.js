import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user'),
  recommendable: belongsTo({ polymorphic: true }),
  start_date: attr('date'),
  action: attr('string'),
  completed: attr('boolean')
});
