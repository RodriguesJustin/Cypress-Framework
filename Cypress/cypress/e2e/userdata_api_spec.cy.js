describe('API Test using Fixtures', () => {
  const apiUrl = 'https://reqres.in/api/users';
  let userId;

  beforeEach(() => {
    cy.fixture('users').then((userData) => {
      userData.id = null;
      cy.request('POST', apiUrl, userData).then((response) => {
        expect(response.status).to.eq(201);
        userId = response.body.id;
      });
    });
  });

  afterEach(() => {
    cy.request('DELETE', `${apiUrl}/${userId}`).then((response) => {
      expect(response.status).to.eq(204);
    });
  });


  it('should retrieve a list of users', () => {
    cy.request('GET', apiUrl).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.lengthOf.at.least(1);
    });
  });

  it('should update a user', () => {
    cy.fixture('users').then((userData) => {
      const newFirstName = 'New First Name';
      userData.first_name = newFirstName;

      cy.request('PUT', `${apiUrl}/${userId}`, userData).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
