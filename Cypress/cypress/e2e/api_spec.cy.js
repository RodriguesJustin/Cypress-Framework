describe('User API', () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  let userId;

  before(() => {
    cy.request('GET', apiUrl).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length.greaterThan(0);
      userId = response.body[0].id;
    });
  });

  it('should create a new user with correct information', () => {
    const userData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
    };
    cy.request('POST', apiUrl, userData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq(userData.name);
      expect(response.body.email).to.eq(userData.email);
      expect(response.body.phone).to.eq(userData.phone);
      userId = response.body.id;
    });
  });
});
