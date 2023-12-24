class testDataGenerator {
    elements = {
      procesVerbaalDropdown: () => cy.get('.accordion-button:contains("Proces Verbaal nummers")'),
      procesVerbaalMoreInfoBtn: () => cy.get('.info .ng-star-inserted:contains("More info")'),
      telefoonNummersDropdown: () => cy.get('.accordion-button:contains("Telefoon nummers")')
    }
  
    procesVerbaalDropdownClick() {
      this.elements.procesVerbaalDropdown().click();
    }

    procesVerbaalMoreInfoBtnClick() {
        this.elements.procesVerbaalMoreInfoBtn().click();
    }
  
    telefoonNummersDropdownClick() {
      this.elements.telefoonNummersDropdown().click();
    }
  }
  
  export default testDataGenerator;