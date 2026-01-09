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
    
    assertInvisibleElement(locater){
        cy.get(locater).should("not.be.visible")
    }

    assertVisibleElementByIndex(locator,index){
        cy.get(locator).eq(index).should("be.visible")
    }




}

class ClickUtils{
    clickElement(locator){
        cy.get(locator).click()
    }

    clickElementByForce(locator){
        cy.get(locator).click({force:true})
    }

    clickElementByText(clickableText){
        cy.contains(clickableText).click()
    }
}


class TypingUtils{
    typeInField(locator, text) {
        cy.get(locator).type(text)
    }
}

export const assertUtils = new AssertUtils();
export const clickUtils = new ClickUtils()
export const typingUtils = new TypingUtils()