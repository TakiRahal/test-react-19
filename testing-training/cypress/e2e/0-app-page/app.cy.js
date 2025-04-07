describe('app page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })

    it('should display the logo and navigation links', () => {
        // check if logo exist.
        cy.get('[data-cy=logo]').should('contain', 'Testing ReactJS')

        cy.get("[data-cy=signin-link]").should("contain", "LogIn");
        cy.get("[data-cy=signup-link]").should("contain", "Register");
        cy.get("[data-cy=home-link]").should("contain", "Home");
        cy.get("[data-cy=marketplace-link]").should("contain", "Marketplace");
        cy.get("[data-cy=about-link]").should("contain", "About Us");
    })

    it("should navigate to the About page when clicking LogIn", () => {
        cy.get("[data-cy=signin-link]").click();
        cy.url().should("include", "/signin");
    });

    it("should navigate to the Sign Up page when clicking SinUp", () => {
        cy.get("[data-cy=signup-link]").click();
        cy.url().should("include", "/signup");
    });

    it("should navigate to the Marketplace page when clicking SinUp", () => {
        cy.get("[data-cy=marketplace-link]").click();
        cy.url().should("include", "/marketplace");
    });
})
