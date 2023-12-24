class testDataGenerator{

    elements = {
        procesVerbaalDropdown : () => cy.get('.accordion-button').contains('Proces Verbaal nummers'),
        telefoonNummersDropdown : () => cy.get('.accordion-button').contains('Telefoon nummers')
    }
}

export default test