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

  it('Verify more info is shown when "More Info" is pressed in Proces Verbaal', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.procesVerbaalDropdownClick();
    testDataGeneratorObj.pvMoreInfoClick();
    testDataGeneratorObj.pvCollapse.should('be.visible');
    testDataGeneratorObj.pvMoreInfoText.should('include', 'The complexity and inconsistency of the Belgian Proces Verbaal');
  }) 

  it('Verify if more info contains ')

  it('Verify Dropdown Menu Telefoon Nummers', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.telefoonNummersDropdownClick();
    testDataGeneratorObj.elements.telefoonNummersDropdown().should('have.attr', 'aria-expanded', 'true');
  })

  it('Verify more info is shown when "More Info" is pressed in Telefoon nummers', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.telefoonNummersDropdownClick();
    testDataGeneratorObj.telephoneMoreInfoButtonClick();
  })  
 })