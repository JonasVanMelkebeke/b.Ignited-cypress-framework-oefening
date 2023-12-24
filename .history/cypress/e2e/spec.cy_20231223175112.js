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

  it('Checks functionality of Menu Proces Verbaal by amount of 10 in year 2000')
  const testDataGeneratorObj = new testDataGenerator();
  testDataGeneratorObj.TypeInYearInputPV('2000');
}

  it('Verify Dropdown Menu Telefoon Nummers', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.telefoonNummersDropdownClick();
    testDataGeneratorObj.elements.telefoonNummersDropdown().should('have.attr', 'aria-expanded', 'true');
  })
 })