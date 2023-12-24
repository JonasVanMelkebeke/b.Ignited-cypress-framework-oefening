class testDataGenerator {
    elements = {
      procesVerbaalDropdown: () => cy.get('.accordion-button:contains("Proces Verbaal nummers")'),
      telefoonNummersDropdown: () => cy.get('.accordion-button:contains("Telefoon nummers")'),
      pvMoreInfo: () => cy.get('#collapse-6 .pv'),
    }
  
    procesVerbaalDropdownClick() {
      this.elements.procesVerbaalDropdown().click();
    }

    pv
  
    telefoonNummersDropdownClick() {
      this.elements.telefoonNummersDropdown().click();
    }
  }
  
  export default testDataGenerator;