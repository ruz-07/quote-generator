const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "What you get by achieving your goals is not as important as what you become.", author: "Zig Ziglar" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" }
];

let currentQuote = null;
let isAnimating = false;

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const quoteCard = document.querySelector('.quote-card');
const newQuoteBtn = document.getElementById('new-quote-btn');

function getRandomQuote() {
  let newQuote;
  do {
    newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  } while (currentQuote && newQuote.text === currentQuote.text && quotes.length > 1);
  return newQuote;
}

function displayQuote(quote) {
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = quote.author;
  currentQuote = quote;
}

function handleNewQuote() {
  if (isAnimating) return;
  
  isAnimating = true;
  quoteCard.classList.add('animating');
  
  setTimeout(() => {
    const newQuote = getRandomQuote();
    displayQuote(newQuote);
    quoteCard.classList.remove('animating');
    isAnimating = false;
  }, 300);
}

// Initialize
displayQuote(getRandomQuote());

// Event listener
newQuoteBtn.addEventListener('click', handleNewQuote);
