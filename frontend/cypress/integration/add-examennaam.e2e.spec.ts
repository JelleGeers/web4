describe('add examennaam', () => {
    beforeEach(() => {
        cy.prepTest();
    });

    it('should be possible to add a examennaam with one vraag', () => {
        cy.login();

        cy.visit('examennaam/add');

        cy.get('[data-test=examennaamName]').type('Ontwerpen');

        [{amount: '1', type: 'moeilijk', name: 'Ghiohijemiojiomjmijioj'}].forEach(
            vraag => {
                cy.get('[data-test=vraagAmount]').last().type(vraag.amount);
     
                cy.get('[data-test=vraagName]').last().type(vraag.name);
            }
        );

        cy.get('[data-test=addExamennaamBtn]').click();

        cy.get('[data-test=examennaamName]').should('be.empty');
    });

    it('should be possible to add a examennaam with multiple vragen', () => {
        cy.login();

        cy.visit('examennaam/add');

        cy.get('[data-test=examennaamName]').type('Ontwerpen');

        const addElement = vraag => {
            cy.get('[data-test=vraagAmount]').last().type(vraag.amount);

            cy.get('[data-test=vraagName]').last().type(vraag.name);
        };

        [
            {amount: '10', name: 'first'},
            {amount: '20',name: 'second'},
            {amount: '30',  name: 'third'},
        ].forEach(
            (vraag, index) => {
                addElement(vraag);
                cy.get('[data-test=vraagAmount]').should('have.length', index + 2);
            }
        );

        cy.get('[data-test=addExamennaamBtn]').click();

        cy.get('[data-test=examennaamName]').should('be.empty');
    });
});
