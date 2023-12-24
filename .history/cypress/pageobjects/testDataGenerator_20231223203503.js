class testDataGenerator {
    elements = {
        procesVerbaalDropdown: () => cy.get('.accordion-button:contains("Proces Verbaal nummers")'),
        telefoonNummersDropdown: () => cy.get('.accordion-button:contains("Telefoon nummers")'),
        pvMoreInfoButton: () => cy.get('#pv-header-button'),
        pvCollapseExample: () => cy.get('#collapse-6')

    }

    procesVerbaalDropdownClick() {
        this.elements.procesVerbaalDropdown().click();
      }
    
      pvMoreInfoClick() {
        // Wacht tot het "aria-expanded" attribuut 'true' is
        this.elements.pvMoreInfoButton().should('have.attr', 'aria-expanded', 'true');
    
        // Klik op de "More info" knop
        this.elements.pvMoreInfoButton().click();
    
        // Wacht tot het "More info" gedeelte zichtbaar is
        this.elements.pvCollapseExample().should('be.visible');
      }

    telefoonNummersDropdownClick() {
        this.elements.telefoonNummersDropdown().click();
    }
}

export default testDataGenerator;