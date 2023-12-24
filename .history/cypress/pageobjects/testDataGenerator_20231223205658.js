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
        // Click the dropdown to make the More Info button visible
        this.elements.procesVerbaalDropdown().click();
    
        // Wait for the More Info button to be visible and clickable
        cy.get('#pv p:contains("More Info")', { timeout: 10000 }) // Increase the timeout as needed
            .should('be.visible')
            .click();
    }
    
    

    telefoonNummersDropdownClick() {
        this.elements.telefoonNummersDropdown().click();
    }
}

export default testDataGenerator;
