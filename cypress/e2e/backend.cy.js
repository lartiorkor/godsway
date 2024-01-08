// describe('login', () => {
  // it('tests login endpoint', () => {
  //   cy.request(
  //     {
  //       method: 'POST', 
  //       url: 'https://amap-api.amalitech-dev.net/auth-service/auth/login', 
  //       body: {
  //         'email': 'assessment.platform@amalitech.com',
  //         'password': 'Amap@123'
  //       }
  //     })
  //     .then((response)=> {
  //       expect(response.status).equal(200)
  //     })
  //     cy.url().should('eq', 'https://amap.amalitech-dev.net/dashboard/home')
  // })

  it('backendLogin', () => {
    const email = 'assessment.platform@amalitech.com';
    const password = 'Amap@123';
  
    cy.request({
      method: 'POST',
      url: 'https://amap-api.amalitech-dev.net/auth-service/auth/login', 
      body: {
        email: email,
        password: password
      }
    }).then((response) => {
      if (response.status === 200 && response.headers['amap-auth-access-token']) {
        cy.window().its('localStorage').invoke('setItem', 'token', response.body.token);
      } else {
        throw new Error('Login failed');
      }
    });
  });
