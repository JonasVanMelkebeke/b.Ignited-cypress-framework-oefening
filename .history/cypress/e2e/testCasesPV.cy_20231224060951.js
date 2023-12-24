import testDataGenerator from "../pageobjects/testDataGenerator"

describe('Test Cases Proces Verbaal nummers', () => {

  beforeEach(function() {
    // executes prior each test within it block
    cy.visit('https://d2r3v7evrrggno.cloudfront.net/');
 })
 
  it('[Proces Verbaal nummers] Verify Dropdown Menu is visible after clicking', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.procesVerbaalDropdownClick()
    testDataGeneratorObj.elements.procesVerbaalDropdown().should('have.attr', 'aria-expanded', 'true');
  })

  it('[Proces Verbaal nummers] Verify more info is shown when "More Info" is clicked', () => {
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

  it('[Proces Verbaal nummers] Verify Input Field "Years" is accessible and checks if the value can only contain numbers', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.procesVerbaalDropdownClick();
    testDataGeneratorObj.pvInputYears.type('2000 abc');
    testDataGeneratorObj.pvInputYears.should('have.value', '2000');
  })

  it('[Proces Verbaal nummers] Verify Input Field "Amount" is accessible and checks if the value can only contain numbers', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.procesVerbaalDropdownClick();
    testDataGeneratorObj.pvInputAmount.type('10 abc');
    testDataGeneratorObj.pvInputAmount.should('have.value', '10');
  })

  it('[Proces Verbaal nummers] Verify functionality of button generate - Default inputs return only 1 number', () => {
    const testDataGeneratorObj = new testDataGenerator();
  
    const expectedReturnedNumbers = 2;
    const expectedSuffix = '/1900';
  
    testDataGeneratorObj.procesVerbaalDropdownClick();
    testDataGeneratorObj.pvInputAmount.type('2');
    testDataGeneratorObj.pvGenerateButtonClick();
    testDataGeneratorObj.pvGeneratedNumbers.should('be.visible');
  
    cy.get(testDataGeneratorObj.elements.pvGeneratedNumbersTxt)
      .invoke('text')
      .then((text) => {
        const generatedNumbers = text.split('\n').filter(Boolean); // Split by newline and remove empty strings
        expect(generatedNumbers.length).to.equal(expectedReturnedNumbers);
        
        // Additional check for the suffix in each generated number
        generatedNumbers.forEach((number) => {
          expect(number).to.include(expectedSuffix);
        });
      });
  });
  
 })