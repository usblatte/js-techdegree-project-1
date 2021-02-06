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
    quote: 'Speaking of random, I really want coffee right now. It’s so cold my breath is frosting in the air.',
    source: 'Mrs. Crosby',
    citation: "The Potter's School",
    year: '2019',
    tags: 'funny'
  },
  {
    quote: "I pray that Mrs. Crosby won’t croak while grading it.",
    source: 'Annabella Chow',
    year: '2019',
    tags: 'funny'
  },
  {
    quote: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    source: 'Michael Jordan',
    citation: ' "Failure" Nike Commercial ',
    year: '2006',
    tags: 'failure'
  },
  {
    quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
    source: 'Amelia Earhart',
    tags: 'inspirational'
  },
  {
    quote: 'Life is what happens to you while you’re busy making other plans. ',
    source: 'John Lennon'
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

//setInterval prints a new random quote every 10 seconds
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);