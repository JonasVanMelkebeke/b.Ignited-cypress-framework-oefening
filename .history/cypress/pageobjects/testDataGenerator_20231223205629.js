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
            .should('exist')  // Ensure the element exists
            .should('be.visible')  // Ensure the element is visible
            .wait(1000)  // Add a wait time (adjust as needed)
            .contains('More info')
            .click();
    }
    
    

    telefoonNummersDropdownClick() {
        this.elements.telefoonNummersDropdown().click();
    }
}

export default testDataGenerator;
