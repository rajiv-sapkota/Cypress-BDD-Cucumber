class AssertUtils{
    assertCurretntUrl(expectedUrl){
        cy.url().should('eq', expectedUrl);
    }

    assertVisibleText(selector, expectedText){
        cy.get(selector).should('be.visible').and('have.text', expectedText);
    }

    assertVisibleElement(selector){
        cy.get(selector).should('be.visible');
    }

    assertSuccessMessage(selector, expectedMessage){
        cy.get(selector).should('be.visible').and('contain.text', expectedMessage);
    }

    assertErrorMessage(selector, expectedMessage){
        cy.get(selector).should('be.visible').and('contain.text', expectedMessage);
    }

    assertUrlContains(expectedSubstring){
        cy.url().should('include', expectedSubstring);
    }   




}

export const assertUtils = new AssertUtils();