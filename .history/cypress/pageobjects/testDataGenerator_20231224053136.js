class testDataGenerator {
    elements = {
        //Proces Verbaal elements
        procesVerbaalDropdown: () => cy.get('.accordion-button:contains("Proces Verbaal nummers")'),
        pvMoreInfoButton: () => cy.get('#pv p:contains("More info"):visible'),
        pvCollapseElement: () => cy.get('#pv-collapseExample'),
        pvMoreInfoTxt: () => cy.get('#pv-collapseExample').invoke('text'),
        pvInputFieldYears: () => cy.get('input#\\\/pv-0'),
        pvInputFieldAmount: () => cy.get('input#\\\/pv-1'),
        pvGenerateButton: () => cy.get('#\\/pv-generate-button'),
        pvGeneratedNumbers: () => cy.get('#pv-text'),
        pvGeneratedNumbersTxt: () => cy.get('#pv-text').invoke('text'),

        //Telefoon nummers elements
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
    
    get pvInputYears() {
        return this.elements.pvInputFieldYears();
    }

    get pvInputAmount() {
        return this.elements.pvInputFieldAmount();
    }

    get pvGeneratedNumbers() {
        return this.elements.pvGeneratedNumbers();
    }

    get pvGeneratedNumbersTxt() {
        return this.elements.pvGeneratedNumbersTxt()
    }

    pvGenerateButtonClick() {
        this.elements.pvGenerateButton().click();
    }

    telephoneMoreInfoButtonClick() {
        this.elements.telephoneMoreInfoButton().click();
    }

    telefoonNummersDropdownClick() {
        this.elements.telefoonNummersDropdown().click();
    }
}

export default testDataGenerator;
