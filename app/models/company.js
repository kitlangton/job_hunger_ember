import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  notes: attr('string'),
  user: belongsTo('user'),
  jobs: hasMany('job'),
  leads: hasMany('lead'),
  website: attr('string'),
  blog: attr('string')
});
