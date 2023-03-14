class LoginPage {
    visit() {
      cy.visit('http://uitestingplayground.com/sampleapp')
    }
  
    fillUsername(value) {
      const field = cy.get('input[name="UserName"]')
      field.clear()
      field.type(value)
      return this
    }
  
    fillPassword(value) {
      const field = cy.get('input[name="Password"]')
      field.clear()
      field.type(value)
      return this
    }
  
    submit() {
      const button = cy.get('#login')
      button.click()
    }

    errorMessage(){
      const error = cy.get('#loginstatus')
      
    }  
  }
  
  export default new LoginPage()