describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the Turborepo logo", () => {
    cy.get('img[alt="Turborepo logo"]').should("be.visible");
  });

  it("should show the main content", () => {
    cy.get("ol").should("be.visible");
    cy.contains("Get started by editing").should("be.visible");
    cy.contains("Save and see your changes instantly").should("be.visible");
  });

  it("should have working CTA buttons", () => {
    // Check primary CTA
    cy.get('a[href*="vercel.com/new/clone"]')
      .should("be.visible")
      .and("contain", "Deploy now")
      .and("have.attr", "target", "_blank")
      .and("have.attr", "rel", "noopener noreferrer");

    // Check secondary CTA
    cy.get('a[href*="turbo.build/repo/docs"]')
      .should("be.visible")
      .and("contain", "Read our docs")
      .and("have.attr", "target", "_blank")
      .and("have.attr", "rel", "noopener noreferrer");
  });

  it("should have a working alert button", () => {
    cy.get("button").contains("Open alert").should("be.visible");
  });

  it("should have footer links", () => {
    cy.get("footer").within(() => {
      cy.get('a[href*="vercel.com/templates"]')
        .should("be.visible")
        .and("contain", "Examples");

      cy.get('a[href*="turbo.build"]')
        .should("be.visible")
        .and("contain", "Go to turbo.build");
    });
  });
});
