describe('signin page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/signin')
        cy.wait(3000);
    })

    it("should display the login form", { scrollBehavior: false }, () => {
        cy.get("[data-cy=email]").should("be.visible");
        cy.get("[data-cy=password]").should("be.visible");
        cy.get("[data-cy=Signin]").should("be.visible");
        cy.wait(3000);
    });

    it("should show an error for incorrect credentials", { scrollBehavior: false }, () => {
        cy.get("[data-cy=email]").invoke('val', '');
        cy.get("[data-cy=password]").invoke('val', '');
        cy.get("[data-cy=Signin]").click();
        cy.wait(3000);
        cy.get("[data-cy=error-message-email]").should("contain", "Email is required");
        cy.get("[data-cy=error-message-password]").should("contain", "Password is required");
    });

    it("should show list of errors with bad credentials", { scrollBehavior: false }, () => {
        cy.get("[data-cy=email]").invoke('val', 'taki@rahal.tn');
        cy.get("[data-cy=password]").invoke('val', ' ');
        cy.get("[data-cy=Signin]").click();
        cy.wait(3000);
        cy.get("[data-cy=list-requirements-password]").should("contain", "One Digit from 1 to 9");
        cy.get("[data-cy=list-requirements-password]").should("contain", "One lowercase letter");
        cy.get("[data-cy=list-requirements-password]").should("contain", "One uppercase letter");
        cy.get("[data-cy=list-requirements-password]").should("contain", "One special character");
        cy.get("[data-cy=list-requirements-password]").should("contain", "Has no space");
        cy.get("[data-cy=list-requirements-password]").should("contain", "It must be 8-16 characters long");
    });

    it("should show list of requirements password", { scrollBehavior: false }, () => {
        cy.get("[data-cy=email]").type('taki@rahal.com');
        cy.get("[data-cy=password]").type('Taki@2025');
        cy.get("[data-cy=Signin]").click();
        cy.wait(3000);
        cy.url().should("include", "/");
    });

    it("should login successfully with correct credentials", { scrollBehavior: false }, () => {
        cy.get("[data-cy=email]").type('taki@rahal.com');
        cy.get("[data-cy=password]").type('Taki@2025');
        cy.get("[data-cy=Signin]").click();
        cy.wait(3000);
        cy.url().should("include", "/");
    });
})
