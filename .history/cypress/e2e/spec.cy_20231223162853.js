import testDataGenerator from "../pageobjects/testDataGenerator"

describe('POM Test', () => {

  beforeEach(function() {
    // executes prior each test within it block
    cy.visit('https://d2r3v7evrrggno.cloudfront.net/');
 })
 
  it('Verify Dropdown Menu Proces Verbaal', () => {
    const testDataGeneratorObj = new testDataGenerator();
    testDataGeneratorObj.procesVerbaalDropdownClick();
  })

  it('Verify Dropdown Menu Telefoon Nummers', () => {
    const testDataGeneratorObj = new testDataGenerator()
  })
 })