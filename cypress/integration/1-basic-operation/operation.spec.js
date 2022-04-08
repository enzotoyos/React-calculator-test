describe("Basic operations Testing", () => {
  it("Test addition", () => {
    cy.visit("http://localhost:3000");
    cy.contains("1").click();
    cy.contains("+").click();
    cy.contains("2").click();
    cy.contains("=").click();
    cy.get(".result").contains("3");
  });
  it("Test modulo", () => {
    cy.visit("http://localhost:3000");
    cy.contains("1").click();
    cy.contains("0").click();
    cy.contains("%").click();
    cy.contains("2").click();
    cy.contains("=").click();
    cy.get(".result").contains("0");
  });
  it("Test soustraction", () => {
    cy.visit("http://localhost:3000");
    cy.contains("2").click();
    cy.contains("-").click();
    cy.contains("1").click();
    cy.contains("=").click();
    cy.get(".result").contains("1");
  });
  it("Test division", () => {
    cy.visit("http://localhost:3000");
    cy.contains("1").click();
    cy.contains("0").click();
    cy.contains("/").click();
    cy.contains("2").click();
    cy.contains("=").click();
    cy.get(".result").contains("5");
  });
  it("Test square", () => {
    cy.visit("http://localhost:3000");
    cy.contains("3").click();
    cy.contains("6").click();
    cy.contains("√x").click();
    cy.contains("=").click();
    cy.get(".result").contains("6");
  });
});
