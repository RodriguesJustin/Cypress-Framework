import LoginPage from '../page_objects/LoginPage'

describe('Login Page', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('should log in with valid credentials', () => {
    const username = 'John'
    const password = 'pwd'

    LoginPage.fillUsername(username)
    LoginPage.fillPassword(password)
    LoginPage.submit()

  //  cy.url().should('include', '/dashboard')
    cy.contains('Welcome, John!').should('be.visible')
  })

  it('should display an error message with invalid credentials', () => {
    const username = 'invalid@example.com'
    const password = 'invalidpassword'

    LoginPage.fillUsername(username)
    LoginPage.fillPassword(password)
    LoginPage.submit() 

    cy.contains('Invalid username/password').should('be.visible')
  })
})