import testDataGenerator from "../pageobjects/testDataGenerator"

describe('POM Test', () => {

  beforeEach(function() {
    // executes prior each test within it block
    cy.visit('https://d2r3v7evrrggno.cloudfront.net/');
 })
 
  it('Verify Dropdown Menu Proces Verbaal', () => {
    const loginObj = new testDataGenerator();
    testDataGenerator.enterUsername('selenium@qa')
    testDataGenerator.enterPassword('qa@12345')
    testDataGenerator.clickSubmit();
    loginObj.elements.successTxt().should('have.text','Login Successfully');
  })
 })