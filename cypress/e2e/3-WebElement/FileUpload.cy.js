/// <reference types="Cypress" />
import 'cypress-file-upload';
describe('Handle File Upload in cypress', () => {
    it('Single File Upload in cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('image1.jpg')
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text', 'File Uploaded!')
    })

    it('File Upload - Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({ filePath: 'image1.jpg', fileName: 'myImg.jpg' })
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text', 'File Uploaded!')
    })

    it('Drag & Drop File Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('image1.jpg', { subjectType: 'drag-n-drop' })
        cy.get('#drag-drop-upload > div > div.dz-details > div > span').contains('image1.jpg')
    })

    it('Upload Multiples File', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['image1.jpg', 'image2.jpg'])
        cy.get('#main > div > p:nth-child(6) > strong').should('have.text', 'Files You Selected:')
    })

    it('File Upload - Shadow DOM', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', { includeShadowDom: true }).attachFile('image1.jpg')
        cy.get('.smart-item-name', { includeShadowDom: true }).contains('image1.jpg')
    })

})