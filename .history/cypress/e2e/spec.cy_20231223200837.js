it('Verify Dropdown Menu Proces Verbaal', () => {
  const testDataGeneratorObj = new testDataGenerator();
  testDataGeneratorObj.procesVerbaalDropdownClick();

  testDataGeneratorObj.elements.procesVerbaalDropdown().should('have.attr', 'aria-expanded', 'true');
  // Add more assertions to verify other aspects of the dropdown if needed
});

it('Verify dropdown More Info Proces Verbaal', () => {
  const testDataGeneratorObj = new testDataGenerator();
  testDataGeneratorObj.procesVerbaalDropdownClick();
  testDataGeneratorObj.pvMoreInfoClick();

  testDataGeneratorObj.elements.pvMoreInfo().should('have.attr', 'aria-expanded', 'true');
  // Add more assertions to verify other aspects of the More Info dropdown if needed
});

it('Verify Dropdown Menu Telefoon Nummers', () => {
  const testDataGeneratorObj = new testDataGenerator();
  testDataGeneratorObj.telefoonNummersDropdownClick();

  testDataGeneratorObj.elements.telefoonNummersDropdown().should('have.attr', 'aria-expanded', 'true');
  // Add more assertions to verify other aspects of the dropdown if needed
});
