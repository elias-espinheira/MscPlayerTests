context('MscPlayerTest', () => {

    it('Song 1', () =>{
    cy.visit('https://elias-espinheira.github.io/MusicPlayer/');

    cy.get('body > div.player > i.fa-sharp.fa-solid.fa-circle-play.botao-play').click();

    cy.get('body > div.player > i.fa-solid.fa-circle-pause.botao-pause').click();

    cy.get('body > div.descricao > h2').should('contain', 'Memory');

    

})
    
    it('Song 2', () =>{
    cy.visit('https://elias-espinheira.github.io/MusicPlayer/');

    cy.get('body > div.player > i.fa-solid.fa-forward.setas.posterior').click();

    cy.get('body > div.descricao > h2').should('contain', 'Still Got The Blues');
    
    })

    it('Song 3', () =>{
        cy.visit('https://elias-espinheira.github.io/MusicPlayer/');
    
        cy.get('body > div.player > i.fa-solid.fa-forward.setas.posterior').click();
        cy.get('body > div.player > i.fa-solid.fa-forward.setas.posterior').click();
    
        cy.get('body > div.descricao > h2').should('contain', "Cafe' Bolero");
        
        })

        it('Song 4', () =>{
            cy.visit('https://elias-espinheira.github.io/MusicPlayer/');
        
            cy.get('body > div.player > i.fa-solid.fa-forward.setas.posterior').click();
            cy.get('body > div.player > i.fa-solid.fa-forward.setas.posterior').click();
            cy.get('body > div.player > i.fa-solid.fa-forward.setas.posterior').click();
        
            cy.get('body > div.descricao > h2').should('contain', 'Man Down');
            
            })

            it('Song 5', () =>{
                cy.visit('https://elias-espinheira.github.io/MusicPlayer/');
            
                cy.get('body > div.player > i.fa-solid.fa-forward.setas.posterior').click();
                cy.get('body > div.player > i.fa-solid.fa-forward.setas.posterior').click();
                cy.get('body > div.player > i.fa-solid.fa-forward.setas.posterior').click();
                cy.get('body > div.player > i.fa-solid.fa-forward.setas.posterior').click();

                 cy.get('body > div.player > i.fa-sharp.fa-solid.fa-circle-play.botao-play').click();
            
                cy.get('body > div.descricao > h2').should('contain', "Garde l'équilibre");
                
                })
});
