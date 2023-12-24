class testDataGenerator {
    elements = {
      procesVerbaalDropdown: () => cy.get('.accordion-button:contains("Proces Verbaal nummers")'),
      telefoonNummersDropdown: () => cy.get('.accordion-button:contains("Telefoon nummers")'),
      yearInputPV: () => cy.get('#/pv-0'),
    }
  
    procesVerbaalDropdownClick() {
      this.elements.procesVerbaalDropdown().click();
    }

    TypeInYearInputPV(value) {
        this.elements.yearInputPV().type(value)
    }
  
    telefoonNummersDropdownClick() {
      this.elements.telefoonNummersDropdown().click();
    }
  }
  
  export default testDataGenerator;