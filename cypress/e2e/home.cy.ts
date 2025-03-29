describe("Home Page", () => {
  it("should load the home page", () => {
    cy.visit("/");
    cy.get("h1").should("exist");
  });
});
