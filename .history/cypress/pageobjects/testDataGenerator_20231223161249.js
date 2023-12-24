class testDataGenerator{

    elements = {
        processVerbaalDropdown : () => cy.get('.accordion-button').contains('Proces'),
        telefoonNummersDropdown : () => cy.get('.accordion-button').contains('')
    }
}