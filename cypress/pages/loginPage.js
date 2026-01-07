class LoginPage {
    visitLoginPage() {
        cy.visit('https://www.saucedemo.com');
    }

    typeUsername(username) {
        cy.get('#user-name').clear().type(username);
    }
    typePassword(password) {
        cy.get('#password').clear().type(password);
    }
    clickLoginButton() {
        cy.get('#login-button').click();
    }       
    login(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLoginButton();
    }  
    


     
}

export const loginPage = new LoginPage();