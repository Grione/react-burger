describe('service is available', function () {
  beforeEach(() => {
    cy.intercept("GET", "https://norma.nomoreparties.space/api/auth/user", { fixture: "user.json" }).as("auth");
    cy.wait("@auth")
  // Устанавливаем токены:
    window.localStorage.setItem(
      "refreshToken",
      JSON.stringify("test-refreshToken")
    );
    cy.setCookie('accessToken', 'test-accessToken')
    cy.wait("@ingredients")
  });

  it('should be available main page', function () {
     cy.visit('/')
     cy.contains('Соберите бургер')
  });

  it('should open ingredient details', function () {
     cy.get('[class^=burger-ingredients-card_link]').first().click()
     cy.contains('Детали ингредиента')
  });
})