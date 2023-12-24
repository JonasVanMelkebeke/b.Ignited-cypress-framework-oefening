class testDataGenerator {
    elements = {
      procesVerbaalDropdown: () => cy.get('.accordion-button:contains("Proces Verbaal nummers")'),
      telefoonNummersDropdown: () => cy.get('.accordion-button:contains("Telefoon nummers")'),
      yearInputPV: () => cy.get('#\\/pv-0'),
      collapseSectionPV: () => cy.get('#collapse-6'),
    }
  
    procesVerbaalDropdownClick() {
      this.elements.procesVerbaalDropdown().click();
    }

    TypeInYearInputPV(value) {
        this.elements.collapseSectionPV().should('be.visible');
        this.elements.yearInputPV().type(value);
    }
  
    telefoonNummersDropdownClick() {
      this.elements.telefoonNummersDropdown().click();
    }
  }
  
  export default testDataGenerator;