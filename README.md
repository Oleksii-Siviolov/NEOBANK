# NEOBANK TEST TASK

You will find the test in the `cypress/e2e/neobankLogin.cy.js` file. As I am using Cypress + JavaScript for this test, I missed the steps, where the test should switch the browser to the fullscreen mode and close the browser tab, as Cypress does not work with the tabs. Also, I added some comments in the code for you, where clarification of my actions were required - this is just for your convenience.

The data for the test is generated in the `cypress/cypress.config.js` file.
My common PageObject class is in the `cypress/support/PageObjects.js` file.
Login page class you will find in the `cypress/support/pages/login.pageObject.js` file.
I also added a customized command for searching the element by ID - check the `cypress\support\commands.js` file.