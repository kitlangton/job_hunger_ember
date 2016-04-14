import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  email(i) { return `foo${i}@bar.com`; },
});
