// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Card(article) {
    const card = document.createElement('div'); // create card element
    card.classList.add('card'); // add card class to element
    
    const headline = document.createElement('div'); // create headline element
    headline.classList.add('headline'); // add headline class to element
    headline.innerText = article.headline; // add headline text to element
    card.appendChild(headline); // append headline element to card

    const author = document.createElement('div'); // create author element
    author.classList.add('author'); // add author class to element
    card.appendChild(author); // append author element to card

    const imgContainer = document.createElement('div'); // create img-container element
    imgContainer.classList.add('img-container'); // add img-container class to element
    author.appendChild(imgContainer); // append img-container element to author element

    const img = document.createElement('img'); // create img element
    img.src = article.authorPhoto; // add source to img element
    imgContainer.appendChild(img); // append img to img-container

    const authorName = document.createElement('span'); // create authorName element
    authorName.innerText = `By ${article.authorName}`; // add author's name to element
    author.appendChild(authorName); // append authorName element to author element

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(articlesData => {
        const articles = articlesData.data.articles;
        const container = document.querySelector('.cards-container');
        articles.bootstrap.forEach(article => container.appendChild(Card(article)));
        articles.javascript.forEach(article => container.appendChild(Card(article)));
        articles.jquery.forEach(article => container.appendChild(Card(article)));
        articles.node.forEach(article => container.appendChild(Card(article)));
        articles.technology.forEach(article => container.appendChild(Card(article)));
    })