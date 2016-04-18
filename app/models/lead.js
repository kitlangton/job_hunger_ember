import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  company: belongsTo('company'),
  name: attr('string'),
  linkedIn: attr('string'),
  email: attr('string'),
  blog: attr('string'),
  notes: attr('string')
});
