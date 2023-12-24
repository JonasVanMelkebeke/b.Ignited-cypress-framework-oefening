import testDataGenerator from "../pageobjects/testDataGenerator"

describe('POM Test', () => {

  beforeEach(function() {
    // executes prior each test within it block
    cy.visit('https://d2r3v7evrrggno.cloudfront.net/');
 })
 
  it('Verify Dropdown Menu ', () => {
    const loginObj = new loginPage();
    loginObj.enterUsername('selenium@qa')
    loginObj.enterPassword('qa@12345')
    loginObj.clickSubmit();
    loginObj.elements.successTxt().should('have.text','Login Successfully');
  })
 
  it('Verify Login unsuccessful for invalid username/password', () => {
    const loginObj = new loginPage();
    loginObj.enterUsername('selenium')
    loginObj.enterPassword('qa@123')
    loginObj.clickSubmit();
    loginObj.elements.errorTxt().should('contain','Enter your userName and password correct');
  })
 })