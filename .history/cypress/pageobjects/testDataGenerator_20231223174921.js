class testDataGenerator {
    elements = {
      procesVerbaalDropdown: () => cy.get('.accordion-button:contains("Proces Verbaal nummers")'),
      telefoonNummersDropdown: () => cy.get('.accordion-button:contains("Telefoon nummers")'),
      yearInputProcesVerbaal: () => cy.get('#/pv-0'),
    }
  
    procesVerbaalDropdownClick() {
      this.elements.procesVerbaalDropdown().click();
    }

    TypeInYearInput
  
    telefoonNummersDropdownClick() {
      this.elements.telefoonNummersDropdown().click();
    }
  }
  
  export default testDataGenerator;