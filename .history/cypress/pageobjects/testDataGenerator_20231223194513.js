class testDataGenerator {
    elements = {
      procesVerbaalDropdown: () => cy.get('.accordion-button:contains("Proces Verbaal nummers")'),
      telefoonNummersDropdown: () => cy.get('.accordion-button:contains("Telefoon nummers")'),
      pVMoreInfo: () => cy.get
    }
  
    procesVerbaalDropdownClick() {
      this.elements.procesVerbaalDropdown().click();
    }
  
    telefoonNummersDropdownClick() {
      this.elements.telefoonNummersDropdown().click();
    }
  }
  
  export default testDataGenerator;