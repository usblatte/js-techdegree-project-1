/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//quotes array of objects

const quotes = [
  {
    quote: '',
    source: '',
    citation: '',
    year: '',
    tags: '',
  },
  {
    quote: '',
    source: '',
    citation: '',
    year: '',
    tags: '',
  },
  {
    quote: '',
    source: '',
    citation: '',
    year: '',
    tags: '',
  },
  {
    quote: '',
    source: '',
    citation: '',
    year: '',
    tags: '',
  },
  {
    quote: '',
    source: '',
    citation: '',
    year: '',
    tags: '',
  },
  {
    quote: '',
    source: '',
    citation: '',
    year: '',
    tags: '',
  },
];

//getRandomQuote function selects a random number between
//1 and the length of the quotes array and returns that number
//index of the quotes array

function getRandomQuote() {
  const rando = Math.floor(Math.random() * quotes.length);
  return quotes[rando];
}

//printQuote function changes the innerHTML of quote-box to the
//elements of a randomly selected object from the quotes array
//if the object contains specified elements

function printQuote() {
  const randomQuote = getRandomQuote();
  const citation = randomQuote.hasOwnProperty('citation') ? randomQuote.citation : '';
  const year = randomQuote.hasOwnProperty('year') ? randomQuote.year : '';
  const tags = randomQuote.hasOwnProperty('tags') ? randomQuote.tags : '';
  
  html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
    <span class="citation">${citation}</span>
    <span class="year">${year}</span>
    <span class="tags">${tags}</span>
  </p>
  `;
  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);