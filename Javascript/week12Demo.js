async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json[0].quote);
    displayQuoteAuthor(json[0].author);
    displayQuoteSeries(json[0].series);
  }
  catch(err) {
    console.log(err)
    alert('Failed');
  }
}
function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
function displayQuoteAuthor(quote) {
  const quoteText = document.querySelector('#js-quote-author');
  quoteText.textContent = quote;
}
function displayQuoteSeries(quote) {
  const quoteText = document.querySelector('#js-quote-series');
  quoteText.textContent = quote;
}
const endpoint = 'https://www.breakingbadapi.com/api/quote/random';
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);
