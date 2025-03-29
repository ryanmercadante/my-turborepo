// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  // Add your login command implementation here
});

// -- This is a child command --
Cypress.Commands.add("getByTestId", (testId) => {
  return cy.get(`[data-testid="${testId}"]`);
});

// -- This is a dual command --
Cypress.Commands.add(
  "dismiss",
  { prevSubject: "optional" },
  (subject, options) => {
    // Add your dismiss command implementation here
  },
);

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
//   // Add your custom implementation here
// })

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
      dismiss(
        options?: Partial<Cypress.Loggable & Cypress.Timeoutable>,
      ): Chainable<void>;
    }
  }
}
