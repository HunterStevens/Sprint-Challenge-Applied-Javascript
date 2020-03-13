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
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res =>{
    console.log('Cards Array', res);
    const articleArr = Object.entries(res.data.articles);
    return articleArr;
})
.then(res =>{
    console.log('Chained Card', res);
    for(let i = 0; i < res.length ; i++){
        const newArticle = res[i];
        cardPlace.appendChild(createCard(newArticle[1]));  
    }
})
.catch(err =>{
    console.log('ERROR: ', err);
})

function createCard(item){
    const cardBod = document.createElement('div'),
            cardHead = document.createElement('div'),
            cardAuthorBod = document.createElement('div'),
            cardImgBod = document.createElement('div'),
            cardImg = document.createElement('img'),
            cardAuthor = document.createElement('span');

    cardBod.classlist.add('card');
    cardHead.classList.add('headline');
    cardAuthorBod.classList.add('author');
    cardImgBod.classList.add('img-container');
    
    cardHead.textContent = item.headline;
    cardImg.src = item.authorPhoto;
    cardAuthor.textContent = item.authorName;
    
    return cardBod;
}

const cardPlace = document.querySelector('cards-container');