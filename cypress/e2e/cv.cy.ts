describe('desktop page', () => {
  it('should scroll to all pages - desktop', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000/').wait(100)
    cy.get('.hidden > :nth-child(2) > a').click().wait(200)
    cy.get('.hidden > :nth-child(3) > a').click().wait(300)
    cy.get('.hidden > :nth-child(4) > a').click().wait(400)
    cy.get('.hidden > :nth-child(5) > a').click().wait(500)
    cy.get('.hidden > :nth-child(1) > a').click().wait(600)

  }),

  it('should scroll directly to contact form - desktop', () =>{
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000/').wait(700)
    cy.get('[data-cy="contact-but"]').click().wait(800)
  }),

  it('should send user to instagram - desktop', () =>{
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000/').wait(900)
    cy.get('.hidden > :nth-child(2) > a').click().wait(1000)
    cy.get(':nth-child(4) > .border-b-4').click().wait(1100)
  }),

  it('should send user to each social media via button - desktop', () =>{
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000/').wait(1200)
    cy.get('.hidden > :nth-child(2) > a').click().wait(1300)
    cy.get(':nth-child(1) > [data-cy="social"]').click().wait(1400)
    cy.get(':nth-child(2) > [data-cy="social"]').click().wait(1500)
    cy.get(':nth-child(3) > [data-cy="social"]').click().wait(1600)
    cy.get(':nth-child(4) > [data-cy="social"]').click().wait(1700)
  }),
  
  it('should redirect the user to a success page when the form when the users press submit and return to main page when user press return - desktop', () =>{
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000/').wait(1800)
    cy.get('.hidden > :nth-child(5) > a').click().wait(1900)
    cy.get('[data-cy="name-input"]').type('rafa - desktop').wait(2000)
    cy.get('[data-cy="email-input"]').type('rafatdr210@gmail.com').wait(2100)
    cy.get('[data-cy="message-input"]').type('hei my name is rafa nice to meet you - desktop').wait(2200)
    cy.get('button[data-cy="submit"]').click().wait(2300);
    cy.intercept('post','https://formspree.io/f/xnqyywdj').as('postform').wait(2400)
    cy.get('[data-cy="return-but"]').click().wait(2500)
  })
}),

describe('mobile page', () => {
  it('should scroll to all pages - mobile', () => {
    cy.viewport(720, 1280)
    cy.visit('http://localhost:3000/').wait(100)
    cy.get('[data-cy="nav-mob-but"]').click().wait(120)
    cy.get('[data-cy="navbar-mobile-2"] > :nth-child(2) > a').click().wait(200)
    cy.get('[data-cy="nav-mob-but"]').click().wait(100)
    cy.get('[data-cy="navbar-mobile-2"] > :nth-child(3) > a').click().wait(400)
    cy.get('[data-cy="nav-mob-but"]').click().wait(100)
    cy.get('[data-cy="navbar-mobile-2"] > :nth-child(4) > a').click().wait(600)
    cy.get('[data-cy="nav-mob-but"]').click().wait(100)
    cy.get('[data-cy="navbar-mobile-2"] > :nth-child(5) > a').click().wait(800)
    cy.get('[data-cy="nav-mob-but"]').click().wait(100)
    cy.get('[data-cy="navbar-mobile-2"] > :nth-child(1) > a').click().wait(1000)
  }),

  it('should scroll directly to contact form - mobile', () =>{
    cy.viewport(720, 1280)
    cy.visit('http://localhost:3000/').wait(200)
    cy.get('[data-cy="contact-but"]').click().wait(300)
  }),

  it('should send user to instagram - mobile', () =>{
    cy.viewport(720, 1280)
    cy.visit('http://localhost:3000/').wait(400)
    cy.get('.pr-4').click().wait(500)
    cy.get('[data-cy="navbar-mobile-2"] > :nth-child(2) > a').click().wait(600)
    cy.get(':nth-child(4) > .border-b-4').click().wait(700)
  }),

  it('should send user to each social media via button - mobile', () =>{
    cy.viewport(720, 1280)
    cy.visit('http://localhost:3000/').wait(800)
    cy.get('.pr-4').click().wait(900)
    cy.get('[data-cy="navbar-mobile-2"] > :nth-child(2)').click().wait(1000)
    cy.get(':nth-child(1) > [data-cy="social"]').click().wait(1100)
    cy.get(':nth-child(2) > [data-cy="social"]').click().wait(1200)
    cy.get(':nth-child(3) > [data-cy="social"]').click().wait(1300)
    cy.get(':nth-child(4) > [data-cy="social"]').click().wait(1400)
  }),
  
  it('should redirect the user to a success page when the form when the users press submit and return to main page when user press return - mobile', () =>{
    cy.viewport(720, 1280)
    cy.visit('http://localhost:3000/').wait(1500)
    cy.get('.pr-4').click().wait(1600)
    cy.get('[data-cy="navbar-mobile-2"] > :nth-child(5) > a').click().wait(1700)
    cy.get('[data-cy="name-input"]').type('rafa - mobile').wait(1800)
    cy.get('[data-cy="email-input"]').type('rafatdr210@gmail.com').wait(1900)
    cy.get('[data-cy="message-input"]').type('hei my name is rafa nice to meet you - mobile').wait(2000)
    cy.get('button[data-cy="submit"]').click().wait(2100);
    cy.intercept('post','https://formspree.io/f/xnqyywdj').as('postform').wait(2200)
    cy.get('[data-cy="return-but"]').click().wait(2300)
  })
})