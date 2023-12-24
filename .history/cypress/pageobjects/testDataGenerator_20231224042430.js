class testDataGenerator {
    elements = {
        procesVerbaalDropdown: () => cy.get('.accordion-button:contains("Proces Verbaal nummers")'),
        telefoonNummersDropdown: () => cy.get('.accordion-button:contains("Telefoon nummers")'),
        pvMoreInfoButton: () => cy.get('#pv p:contains("More info"):visible'),
        pvMoreInfoTxt: () => cy.get('#pv-collapseExample.collapse.show'),
        telephoneMoreInfoButton: () => cy.get('#telephone p:contains("More info"):visible'),

    }

    procesVerbaalDropdownClick() {
        this.elements.procesVerbaalDropdown().click();
    }

    pvMoreInfoClick() {
        this.elements.pvMoreInfoButton().click();
    }

    telephoneMoreInfoButtonClick() {
        this.elements.telephoneMoreInfoButton().click();
    }

    telefoonNummersDropdownClick() {
        this.elements.telefoonNummersDropdown().click();
    }
}

export default testDataGenerator;
