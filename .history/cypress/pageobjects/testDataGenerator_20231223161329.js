class testDataGenerator{

    elements = {
        procesVerbaalDropdown : () => cy.get('.accordion-button').contains('Proces Verbaal Nu'),
        telefoonNummersDropdown : () => cy.get('.accordion-button').contains('')
    }
}