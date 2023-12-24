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
    }
    
    

    telefoonNummersDropdownClick() {
        this.elements.telefoonNummersDropdown().click();
    }
}

export default testDataGenerator;