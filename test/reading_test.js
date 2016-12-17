const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the db', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });

  it('finds all the users with a name of joe', () => {
    
  });
});
