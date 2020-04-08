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
    let cardObject = res.data.articles;
    let articleArr = Object.values(cardObject);
    articleArr.forEach(article => {
        console.log('Article 1', article);
        article.forEach(article2 => {
            createCard(article2);
            console.log('Article 2', article2);
        })
    });
})
.catch(err =>{
    console.log('ERROR: ', err);
})
const cardPlace = document.querySelector('.cards-container');

function createCard(item){
    const cardBod = document.createElement('div'),
            cardHead = document.createElement('div'),
            cardAuthorBod = document.createElement('div'),
            cardImgBod = document.createElement('div'),
            cardImg = document.createElement('img'),
            cardAuthor = document.createElement('span');

    cardBod.append(cardHead, cardAuthorBod);
    cardAuthorBod.append(cardImgBod, cardAuthor);
    cardImgBod.appendChild(cardImg);
    cardPlace.appendChild(cardBod);

    cardBod.classList.add('card');
    cardHead.classList.add('headline');
    cardAuthorBod.classList.add('author');
    cardImgBod.classList.add('img-container');
    
    cardHead.textContent = item.headline;
    cardImg.src = item.authorPhoto;
    cardAuthor.textContent = item.authorName;

    return cardBod;
}

// axios.get("https://lambda-times-backend.herokuapp.com/articles")
//     .then(response => {
//        let cardObj = response.data.articles;
//        let infoArr = Object.values(cardObj);
//        infoArr.forEach(cv => {
//            cv.forEach(cv2 => {
//             createCard(cv2);
//            })
//        })
//     })
// const cardCont = document.querySelector(".cards-container");
// function createCard(obj){
//     const card = document.createElement("div");
//     const headline = document.createElement("div");
//     const author = document.createElement("div");
//     const imgCont = document.createElement("div");
//     const img = document.createElement("img");
//     const authorSpan = document.createElement("span");
//     card.append(headline, author);
//     author.append(imgCont, authorSpan);
//     imgCont.appendChild(img);
//     cardCont.appendChild(card);
//     card.classList.add("card");
//     headline.classList.add("headline");
//     author.classList.add("author");
//     imgCont.classList.add("img-container");
//     headline.textContent = obj.headline;
//     img.src = obj.authorPhoto;
//     authorSpan.textContent = obj.authorName;
//     return card;
// }
