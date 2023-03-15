describe('User API', () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  let userId;
  
  beforeEach(() => {
    cy.fixture('user').then((userData) => {
      userData.id = null;

      cy.request('POST', apiUrl, userData).then((response) => {
        expect(response.status).to.eq(201);
        userId = response.body.id;
      });
    });
  });

  afterEach(() => {
    cy.request('DELETE', `${apiUrl}/${userId}`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should update the user name', () => {
    cy.fixture('users').then((userData) => {
      const newName = 'New Name';
      userData.name = newName;

      cy.request('PUT', `${apiUrl}/${userId}`, userData).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(newName);
      });
    });
  });

  it('should retrieve the user by ID', () => {
    cy.request('GET', `${apiUrl}/${userId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(userId);
    });
  });
});

