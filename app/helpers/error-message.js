import Ember from 'ember';

export function errorMessage(params) {
  var message = [];

  if (params[0]) {
    console.log(params[0])
    params[0].forEach(function(msg){
      message.push(msg);
    })
    return message.join(', ');
  }

}

export default Ember.Helper.helper(errorMessage);
