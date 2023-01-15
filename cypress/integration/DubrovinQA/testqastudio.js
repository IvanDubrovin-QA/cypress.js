describe('Тестируем цикл покупки товара', function () {
    it('Проверка функционала покупки товара от А до Я', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.product_title').contains('БРОММС Двухместная кровать')
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(2000);
         cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
         cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.product_title').contains('КЛЛАРИОН Низкий столик');
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(3000);
         cy.get('.checkout').contains('Оформение заказа');
         cy.get('.checkout').click();
         cy.get('.page-header__title').contains('Оформение заказа');
         cy.get('#billing_first_name').type('Иван');
         cy.get('#billing_last_name').type('Иванович');
         cy.get('#billing_address_1').type('улица дом 1');
         cy.get('#billing_city').type('Г.МОСКВА');
         cy.get('#billing_state').type('Московский');
         cy.get('#billing_postcode').type('123');
         cy.get('#billing_phone').type('8-903-123-55-66');
         cy.get('#billing_email').type('qastudio@super.ru');
         cy.get('#place_order').click();
         cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.')
     })
 })
 