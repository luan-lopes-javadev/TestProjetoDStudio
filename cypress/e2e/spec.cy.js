describe('exemplo studio', () => {
  it('read json file and navigate to url from the file', () => {
    cy.readFile('cypress/fixtures/publicainf.json').then(content =>{  
        cy.wrap(content).as("publicainf")
        
    })

    cy.get("@publicainf").then(publisContent => {
      cy.log(publisContent["url"])
      cy.visit(publisContent["url"])
    //cy.visit('https://www.wattpad.com/login');
    cy.get('.btn-primary').click();
    cy.get('#login-username').type('luancordova1996@gmail.com');
    cy.get('#login-password').clear('@');
    cy.get('#login-password').type('@LOPESlopes96');
    cy.get('#login-form > .btn').click();
    cy.get(':nth-child(3) > .list-inline > .button-group > button').click();
    cy.get(':nth-child(3) > .list-inline > .button-group > .dropdown-menu > .header-list > :nth-child(1) > a').click();
    cy.get('.story-title').type(publisContent["titulo"])
    cy.get('.story-description').click().type(publisContent["descricao"])
    //cy.get('.story-description').click();
    cy.get('.character-input').clear('L');
    cy.get('.character-input').type('Luan');
    cy.get('.character > .btn > .fa').click()
    cy.get(':nth-child(2) > .character-input').click().type(publisContent["personagem2"])
    cy.get('.characters > :nth-child(2) > .btn').click()
    cy.get(':nth-child(3) > .character-input').click().type(publisContent["personagem3"])
    cy.get('#categoryselect').select('11');
    cy.get('#add-tag > :nth-child(1)').click();
    cy.get('#tag-input').clear();
    cy.get('#tag-input').type('Terror');
    cy.get('.main-edit-form').click();
    cy.get('#target-audience').select('13-18');
    cy.get('#select-form-component').select('2');
    cy.get('.actions > .btn-orange').click()
    cy.get('#story-title').click();
    cy.get('.story-editor').click();
    cy.get('.button-container > .btn').click();
    cy.get('#acknowledge-checkbox').click();

  })
 })
})
