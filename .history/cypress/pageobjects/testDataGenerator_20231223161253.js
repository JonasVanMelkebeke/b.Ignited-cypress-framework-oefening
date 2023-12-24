class testDataGenerator{

    elements = {
        procesVerbaalDropdown : () => cy.get('.accordion-button').contains('Proces'),
        telefoonNummersDropdown : () => cy.get('.accordion-button').contains('')
    }
}