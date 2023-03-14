describe('Create User API', () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  it('should create a new user with correct information', () => {
    const newUser = {
      name: 'Test User',
      email: 'testuser@example.com',
      phone: '555-555-5555',
    };

    cy.request('POST', apiUrl, newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq(newUser.name);
      expect(response.body.email).to.eq(newUser.email);
      expect(response.body.phone).to.eq(newUser.phone);
    });
  });

});
