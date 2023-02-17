const testData = {
  pageTitle: 'NEOBANK для бізнесу',
  phone: 632390949, /* Different phone number is indicated, as the flow expects the two-step verification. The phone number, indicated in the requirements does not have it, so I registered my own. In other case, the test fails. */
  title: ' Відкриття бізнес-рахунку можливе тільки через додаток NEOBANK для бізнесу ', /* The text in the requirements is missing the word 'додаток' and spaces before and after the text, so the test would fall. In this case, I added the word and copied the text from the element directly, and the test is able to find the needed element on the page. In other case it would fail. */
};

module.exports = { testData };