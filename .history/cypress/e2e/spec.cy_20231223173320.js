import testDataGenerator from "../pageobjects/testDataGenerator"

describe('POM Test', () => {

  beforeEach(function() {
    // executes prior each test within it block
    cy.visit('https://d2r3v7evrrggno.cloudfront.net/');
 })
 
  it('Verify Dropdown Menu Proces Verbaal', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.procesVerbaalDropdownClick()
    testDataGeneratorObj.elements.procesVerbaalDropdown().should('have.attr', 'aria-expanded', 'true');
  })

  it('Verify Proces Verbaal More info button works', () => {
    const testDataGeneratorObj = new testDataGenerator();
  
    // Click on the first matching "More info" button
    testDataGeneratorObj.procesVerbaalMoreInfoBtn().eq(0).click();
  
    // Assert that the button has aria-expanded="true"
    testDataGeneratorObj.procesVerbaalMoreInfoBtn().eq(0).should('have.attr', 'aria-expanded', 'true');
  });

  it('Verify Dropdown Menu Telefoon Nummers', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.telefoonNummersDropdownClick();
    testDataGeneratorObj.elements.telefoonNummersDropdown().should('have.attr', 'aria-expanded', 'true');
  })
 })