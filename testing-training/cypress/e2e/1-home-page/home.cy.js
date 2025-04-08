describe('home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })

    it('should exist the banner in home page', { scrollBehavior: false }, () => {
        // check if logo exist.
        cy.get('[data-cy=banner-id]').should('be.visible');
    })

    it('should exist the list of links in home page', { scrollBehavior: false }, () => {
        // check if logo exist.
        cy.get('[data-cy=links-banner-id]').should('be.visible');
    })

    it('should exist the work section in home page', { scrollBehavior: false }, () => {
        // check if logo exist.
        cy.get('[data-cy=work-id]').should('be.visible');
    })
})
