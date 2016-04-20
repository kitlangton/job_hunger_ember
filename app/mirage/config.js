export default function() {
  // These comments are here to help you get started. Feel free to delete them.
  //

  this.get('/users', function(db, request) {
    return {
      data: db.users.map(attrs => (
                  { type: 'users', id: attrs.id, attributes: attrs }
                  ))
    };
  });

  this.get('/users/:id', (db, request) => {
    let user = db.users.find(request.params.id);

    let data = {
      type: 'user',
      id: request.params.id,
      attributes: user,
      // relationships: {
      // }
    };

    return { data };
  });

  this.post('/auth', function(db, request) {
    return {
      "status": "success",
      "data": {
        "id": 15,
        "provider": "email",
        "uid": "dog@email.com",
        "name": null,
        "nickname": null,
        "image": null,
        "email": "dog@email.com",
        "created_at": "2016-04-20T01:53:19.232Z",
        "updated_at": "2016-04-20T01:53:19.322Z",
        "score": 0
      }
    };
  });

  this.post('/auth/sign_in', function(db, request) {
    let user = db.users.find(1);
    return {
      "data": {
        "id": 1,
        "provider": "email",
        "uid": user.email,
        "name": null,
        "nickname": null,
        "image": null,
        "email": user.email,
        "score": 0
      }
    };
  });

  this.post('/users', function(db, request) {
    var attrs = JSON.parse(request.requestBody).user;
    var user = db.users.insert(attrs);
    console.log(user);
    return { data: {
      type: 'user',
      id: user.id,
      attributes: user
    } };
  });

  /*
     Config (with defaults).

     Note: these only affect routes defined *after* them!
     */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
     Route shorthand cheatsheet
     */
  /*
     GET shorthands

  // Collections
  this.get('/contacts');
  this.get('/contacts', 'users');
  this.get('/contacts', ['contacts', 'addresses']);

  // Single objects
  this.get('/contacts/:id');
  this.get('/contacts/:id', 'user');
  this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
     POST shorthands

     this.post('/contacts');
     this.post('/contacts', 'user'); // specify the type of resource to be created
     */

  /*
     PUT shorthands

     this.put('/contacts/:id');
     this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
     */

  /*
     DELETE shorthands

     this.del('/contacts/:id');
     this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

  // Single object + related resources. Make sure parent resource is first.
  this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
     Function fallback. Manipulate data in the db via

     - db.{collection}
     - db.{collection}.find(id)
     - db.{collection}.where(query)
     - db.{collection}.update(target, attrs)
     - db.{collection}.remove(target)

  // Example: return a single object with related models
  this.get('/contacts/:id', function(db, request) {
  var contactId = +request.params.id;

  return {
  contact: db.contacts.find(contactId),
  addresses: db.addresses.where({contact_id: contactId})
  };
  });

*/
}

/*
   You can optionally export a config that is only loaded during tests
   export function testConfig() {

   }
   */
