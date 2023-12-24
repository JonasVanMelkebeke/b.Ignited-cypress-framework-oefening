import testDataGenerator from "../pageobjects/testDataGenerator"

describe('POM Test', () => {

  beforeEach(function() {
    // executes prior each test within it block
    cy.visit('https://d2r3v7evrrggno.cloudfront.net/');
 })
 
  it('Verify Dropdown Menu 'Proces Verbaal is visible after clicking', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.procesVerbaalDropdownClick()
    testDataGeneratorObj.elements.procesVerbaalDropdown().should('have.attr', 'aria-expanded', 'true');
  })

  it('Verify Dropdown Menu is ')

  it('Verify more info is shown when "More Info" is pressed in Proces Verbaal', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.procesVerbaalDropdownClick();
    testDataGeneratorObj.pvMoreInfoClick();
    testDataGeneratorObj.pvCollapse.should('be.visible');
  }) 

  it('Verify if the text in more info contains "The complexity and inconsistency of the Belgian Proces Verbaal"', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.procesVerbaalDropdownClick();
    testDataGeneratorObj.pvMoreInfoClick();
    testDataGeneratorObj.pvMoreInfoText.should('include', 'The complexity and inconsistency of the Belgian Proces Verbaal');
  })    

  it('Verify Dropdown Menu Telefoon Nummers is visible after clicking', () => {
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