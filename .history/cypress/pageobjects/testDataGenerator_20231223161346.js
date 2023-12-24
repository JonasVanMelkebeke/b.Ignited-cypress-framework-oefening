class testDataGenerator{

    elements = {
        procesVerbaalDropdown : () => cy.get('.accordion-button').contains('Proces Verbaal nummers telefoon'),
        telefoonNummersDropdown : () => cy.get('.accordion-button').contains('')
    }
}