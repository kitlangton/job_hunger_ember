import DeviseAuthorizer from 'ember-simple-auth/authorizers/devise';

const { isEmpty } = Ember;

export default DeviseAuthorizer.extend({
  authorize(data, block) {
    const { tokenAttributeName, identificationAttributeName } = this.getProperties('tokenAttributeName', 'identificationAttributeName');
    const accessToken          = data.accessToken;
    const userIdentification = data.uid;

    if (!isEmpty(accessToken) && !isEmpty(userIdentification)) {
      data['access-token'] = data.accessToken;
      data['token-type'] = data.tokenType;
      block(data);
    } else {
      console.log("FAIL");
      console.log(data);
    }
  }
});
