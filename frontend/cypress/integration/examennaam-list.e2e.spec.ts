import '../support/commands';

describe('Examennaam list', () => {
    beforeEach(() => {
        cy.prepTest();
        cy.login();

        const examennaam1 = {
            name: 'Examennaam name',
            vragen: [
                {
                    name: 'First',
                    amount: '1',
                }
            ],
            created: '2018-04-16T13:15:50.902Z'
        };
        const examennaam2 = {
            name: 'Examennaam name2',
            vragen: [
                {
                    name: 'Second',
                    amount: '2',
                }
            ],
            created: '2018-04-16T13:15:50.902Z'
        };

        cy.addExamennaam(examennaam1);
        cy.addExamennaam(examennaam2);
    });

    it('should show a list of examennamen', () => {
        cy.visit('/');
        cy.get('[data-test=examennaam]').should('have.length', 2);
    });

    it('should be possible to remove an examennaam from the list', () => {
        cy.visit('');
        cy.get('[data-test=removeExamennaamBtn]').last().click();
        cy.get('[data-test=examennaam]').should('have.length', 1);
    });
});
