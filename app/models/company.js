import attr from 'ember-data/attr';
import Recommendable from './recommendable';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Recommendable.extend({
  name: attr('string'),
  notes: attr('string'),
  user: belongsTo('user'),
  jobs: hasMany('job'),
  leads: hasMany('lead'),
  website: attr('string'),
  blog: attr('string'),
  address: attr('string'),
  interest: attr('number'),
  route: 'companies.company'
});
