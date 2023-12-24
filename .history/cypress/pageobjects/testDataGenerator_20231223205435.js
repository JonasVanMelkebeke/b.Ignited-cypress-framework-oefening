class testDataGenerator {
    elements = {
        procesVerbaalDropdown: () => cy.get('.accordion-button:contains("Proces Verbaal nummers")'),
        telefoonNummersDropdown: () => cy.get('.accordion-button:contains("Telefoon nummers")'),
        pvMoreInfoButton: () => cy.get('#pv p:contains("More Info"):visible')
    }

    procesVerbaalDropdownClick() {
        this.elements.procesVerbaalDropdown().click();
    }

    pvMoreInfoClick() {
        this.elements.pvMoreInfoButton()
            .should('be.visible', { timeout: 10000 })  // Increase the timeout to 10 seconds
            .contains('More info')
            .click();
    }
    
    telefoonNummersDropdownClick() {
        this.elements.telefoonNummersDropdown().click();
    }
}

export default testDataGenerator;
