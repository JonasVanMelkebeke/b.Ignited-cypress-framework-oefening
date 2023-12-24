class testDataGenerator {
    elements = {
      procesVerbaalDropdown: () => cy.get('.accordion-button:contains("Proces Verbaal nummers")'),
      pvMoreInfoButton: () => cy.get('#pv [data-bs-toggle="collapse"]'),
      pvCollapseExample: () => cy.get('#pv-collapseExample')
    }
  
    procesVerbaalDropdownClick() {
      this.elements.procesVerbaalDropdown().click();
    }
  
    pvMoreInfoClick() {
      // Wacht tot de "More info" knop zichtbaar is
      this.elements.pvMoreInfoButton().should('be.visible').click();
  
      // Wacht tot het "More info" gedeelte zichtbaar is
      this.elements.pvCollapseExample().should('be.visible');
    }
  
    telefoonNummersDropdownClick() {
      // Implementeer dit indien nodig
    }
  }
  
  export default testDataGenerator;
  