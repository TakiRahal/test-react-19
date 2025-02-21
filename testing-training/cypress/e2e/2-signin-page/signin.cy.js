describe('signin page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/signin')
    })

    it("should display the login form", () => {
        cy.get("[data-cy=email]").should("be.visible");
        cy.get("[data-cy=password]").should("be.visible");
        cy.get("[data-cy=Signin]").should("be.visible");
    });

    it("should show an error for incorrect credentials", () => {
        cy.get("[data-cy=email]").invoke('val', '');
        cy.get("[data-cy=password]").invoke('val', '');
        cy.get("[data-cy=Signin]").click();
        cy.get("[data-cy=error-message-email]").should("contain", "Email is valid");
        cy.get("[data-cy=error-message-password]").should("contain", "Password is valid");
    });


    it("should login successfully with correct credentials", () => {
        cy.get("[data-cy=email]").type('taki@rahal.com');
        cy.get("[data-cy=password]").type('azerty');
        cy.get("[data-cy=Signin]").click();

        cy.url().should("include", "/");
    });
})
