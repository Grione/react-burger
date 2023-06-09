describe('service is available', function () {
  beforeEach(() => {
    cy.intercept("GET", "https://norma.nomoreparties.space/api/auth/user", { fixture: "user.json" }).as("auth");
    cy.intercept("GET", "https://norma.nomoreparties.space/api/ingredients", { fixture: "ingredients.json" }).as("ingredients");
    //cy.wait("@auth")
    cy.visit('/')
    // Устанавливаем токены:
    window.localStorage.setItem(
      "refreshToken",
      JSON.stringify("test-refreshToken")
    );
    cy.setCookie('accessToken', 'test-accessToken')
    //cy.wait("@ingredients")
  });

  it('should be available main page', function () {
    cy.wait("@ingredients").its('response.body').should('deep.equal', {
      "success": true,
      "data": [
        {
          "_id": "1",
          "name": "Булка 1",
          "type": "bun",
          "proteins": 80,
          "fat": 24,
          "carbohydrates": 53,
          "calories": 420,
          "price": 1255,
          "image": "https://code.s3.yandex.net/react/code/bun-02.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
          "__v": 0
        },
        {
          "_id": "2",
          "name": "Соус 1",
          "type": "sauce",
          "proteins": 30,
          "fat": 20,
          "carbohydrates": 40,
          "calories": 30,
          "price": 90,
          "image": "https://code.s3.yandex.net/react/code/sauce-02.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/sauce-02-large.png",
          "__v": 0
        },
        {
          "_id": "3",
          "name": "Начинка 1",
          "type": "main",
          "proteins": 44,
          "fat": 26,
          "carbohydrates": 85,
          "calories": 643,
          "price": 988,
          "image": "https://code.s3.yandex.net/react/code/meat-03.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
          "__v": 0
        }
      ]
    })
    cy.contains('Соберите бургер')
  });

  it('should open ingredient details', function () {
    cy.get('[data-test="Булка 1"]').click()
    cy.get('[data-test="modal-title"').contains('Булка 1')
  });

  it('should close ingredient details by button', function () {
    cy.get('[data-test="Булка 1"]').click()
    cy.get('[data-test="close-button"]').click();
    cy.get('[data-test="modal"]').should('not.exist')
    cy.get('[data-test="modal-overlay"]').should('not.exist')
    cy.visit('/');
  });

  it('should close ingredient details by overlay', function () {
    cy.get('[data-test="Булка 1"]').click()
    cy.get('[data-test="modal-overlay"]').click({ force: true });
    cy.get('[data-test="modal"]').should('not.exist')
    cy.get('[data-test="modal-overlay"]').should('not.exist')
    cy.visit('/');
  });

  it('should dragndrop ingredients', function () {
    cy.get('[data-test="Булка 1"]').drag('[data-test="constructor"]')
    cy.get('[data-test="Начинка 1"]').drag('[data-test="constructor"]')
    cy.get('[data-test="constructor"]').contains('Булка 1')
    cy.get('[data-test="constructor"]').contains('Начинка 1')
  })

  it('should open order number', function () {
    cy.get('[data-test="Булка 1"]').drag('[data-test="constructor"]')
    cy.get('[data-test="Начинка 1"]').drag('[data-test="constructor"]')
    cy.get('[data-test="order-button"]').click()
    cy.intercept("POST", "https://norma.nomoreparties.space/api/orders", { fixture: "order.json" }).as("order");
    cy.wait("@order")
    cy.get('[data-test="order-id"]').contains("7489")
    cy.get('[data-test="close-button"]').click();
  });
})