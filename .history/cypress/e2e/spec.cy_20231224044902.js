import testDataGenerator from "../pageobjects/testDataGenerator"

describe('POM Test', () => {

  beforeEach(function() {
    // executes prior each test within it block
    cy.visit('https://d2r3v7evrrggno.cloudfront.net/');
 })
 
  it('[Proces Verbaal nummers] Verify Dropdown Menu is visible after clicking', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.procesVerbaalDropdownClick()
    testDataGeneratorObj.elements.procesVerbaalDropdown().should('have.attr', 'aria-expanded', 'true');
  })

  it('[Proces Verbaal nummers] Verify more info is shown when "More Info" is clicked in Proces Verbaal', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.procesVerbaalDropdownClick();
    testDataGeneratorObj.pvMoreInfoClick();
    testDataGeneratorObj.pvCollapse.should('be.visible');
  }) 

  it('[Proces Verbaal nummers] Verify text more info contains "The complexity and inconsistency of the Belgian Proces Verbaal"', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.procesVerbaalDropdownClick();
    testDataGeneratorObj.pvMoreInfoClick();
    testDataGeneratorObj.pvMoreInfoText.should('include', 'The complexity and inconsistency of the Belgian Proces Verbaal');
  })    

  it('[Telefoon nummers] Verify Dropdown Menu is visible after clicking', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.telefoonNummersDropdownClick();
    testDataGeneratorObj.elements.telefoonNummersDropdown().should('have.attr', 'aria-expanded', 'true');
  })

  it('[Telefoon nummers] Verify more info is shown when "More Info" is clicked in Telefoon nummers', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.telefoonNummersDropdownClick();
    testDataGeneratorObj.telephoneMoreInfoButtonClick();
  })

  it('[Telefoon nummers] Verify text more info contains "While it is difficult to find accurate information about the structure"', () =>{
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.telefoonNummersDropdownClick();
    testDataGeneratorObj.telephoneMoreInfoButtonClick();
  })
 })