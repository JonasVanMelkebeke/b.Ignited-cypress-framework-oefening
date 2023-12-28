import testDataGenerator from "../pageobjects/testDataGenerator"

describe('Test Cases Telefoon nummers', () => {

    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('https://d2r3v7evrrggno.cloudfront.net/');
   })
  
    it('[Telefoon nummers] Verify Dropdown Menu is visible after clicking', () => {
      const testDataGeneratorObj = new testDataGenerator();

      testDataGeneratorObj.telefoonNummersDropdownClick();
      testDataGeneratorObj.elements.telefoonNummersDropdown().should('have.attr', 'aria-expanded', 'true');
    })
  
    it('[Telefoon nummers] Verify more info is shown when "More Info" is clicked', () => {
      const testDataGeneratorObj = new testDataGenerator();

      testDataGeneratorObj.telefoonNummersDropdownClick();
      testDataGeneratorObj.telephoneMoreInfoButtonClick();
      testDataGeneratorObj.telephoneCollapse.should('be.visible');
    })
  
    it('[Telefoon nummers] Verify text more info contains "While it is difficult to find accurate information about the structure"', () => {
      const testDataGeneratorObj = new testDataGenerator();

      testDataGeneratorObj.telefoonNummersDropdownClick();
      testDataGeneratorObj.telephoneMoreInfoButtonClick();
      testDataGeneratorObj.telephoneMoreInfoText.should('include', 'While it is difficult to find accurate information about the structure');
    })

    it('[Telefoon nummers] Verify Input Field "Amount" is accessible and checks if the value can only contain numbers', () => {
      const testDataGeneratorObj = new testDataGenerator();

      testDataGeneratorObj.telefoonNummersDropdownClick();
      testDataGeneratorObj.telephoneFieldAmount.type('10 abc');

      testDataGeneratorObj.telephoneFieldAmount.should('have.value', '10');
    })

    it('[Telefoon nummers] Verify functionality of button generate', () => {
      const testDataGeneratorObj = new testDataGenerator();

      testDataGeneratorObj.telefoonNummersDropdownClick();
      testDataGeneratorObj.telephoneNumberGenerateButtonClick();

      testDataGeneratorObj.telephoneGeneratedNumbers.should('be.visible');
    })

    it('[Telefoon nummers] Verify selected country returns correct area code - Default amount returns only 1 telephone number', () => {
      const testDataGeneratorObj = new testDataGenerator();

      const country = 'Belgium';
      const expectedAreaCode = '+32';

      testDataGeneratorObj.telefoonNummersDropdownClick();
      testDataGeneratorObj.telephoneNumberCountrySelect(country);
      testDataGeneratorObj.telephoneNumberGenerateButtonClick();
      testDataGeneratorObj.telephoneGeneratedNumbersTxt.should('include', expectedAreaCode)
    })

    it('[Telefoon nummers] Verify amount ')
   })