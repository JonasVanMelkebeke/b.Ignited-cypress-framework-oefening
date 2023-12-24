class testDataGenerator {
    elements = {
        procesVerbaalDropdown: () => cy.get('.accordion-button:contains("Proces Verbaal nummers")'),
        pvMoreInfoButton: () => cy.get('#pv p:contains("More info"):visible'),
        pvCollapseElement: () => cy.get('#pv-collapseExample'),
        pvMoreInfoTxt: () => cy.get('#pv-collapseExample').invoke('text'),
        
        telefoonNummersDropdown: () => cy.get('.accordion-button:contains("Telefoon nummers")'),
        telephoneMoreInfoButton: () => cy.get('#telephone p:contains("More info"):visible'),
        telephoneCollapseElement: () => cy.get('#telephone-collapseExample'),
        telephoneMoreInfoTxt: () => cy.get('#telephone-collapseExample').invoke('text')

    }

    procesVerbaalDropdownClick() {
        this.elements.procesVerbaalDropdown().click();
    }

    pvMoreInfoClick() {
        this.elements.pvMoreInfoButton().click();
    }

    get pvCollapse() {
        return this.elements.pvCollapseElement();
    }

    get pvMoreInfoText() {
        return this.elements.pvMoreInfoTxt();
    }
      
    get telephoneCollapse() {
        return this.elements.telephoneCollapseElement();
    }
    
    get telephoneMoreInfoText() {
        return this.elements.telephoneMoreInfoTxt();
    }    

    telephoneMoreInfoButtonClick() {
        this.elements.telephoneMoreInfoButton().click();
    }

    telefoonNummersDropdownClick() {
        this.elements.telefoonNummersDropdown().click();
    }
}

export default testDataGenerator;
