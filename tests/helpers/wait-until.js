import Ember from 'ember';

// export default Ember.Test.registerAsyncHelper('waitForElement', function(app, element) {
// 	return Ember.Test.promise(function(resolve) {
// 		Ember.Test.adapter.asyncStart();
// 		var interval = setInterval(function(){
//       console.log('waiting');
// 			if($(element).length>0){
// 				clearInterval(interval);
// 				Ember.Test.adapter.asyncEnd();
// 				Ember.run(null, resolve, true);
// 			}
// 		}, 10);
// 	});
// });
export default Ember.Test.registerAsyncHelper('waitForElement', function(app, selector) {

  var waiter = function() {
    return $(selector).length > 0;
  };

  Ember.Test.registerWaiter(waiter);
  var promise = app.testHelpers.wait();

  promise.then(function() {
    Ember.Test.unregisterWaiter(waiter);
  });

  // it will be resolved when the pending events have been processed
  // (routing loads, ajax requests, run loops and waiters)
  return promise;
});

