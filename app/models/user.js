import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  email: attr('string'),
  password: attr('string'),
  score: attr('number'),
  companies: hasMany('company'),
  leads: hasMany('lead'),
  jobs: hasMany('job')
});
