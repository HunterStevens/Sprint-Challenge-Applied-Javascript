// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(res =>{
    console.log('Tabs array', res);

    const article = Object.values(res.data.topics);
    
    article.forEach(element => {
        tabPlace.append(createTabs(element));
    });
})
.catch(err =>{
    console.log('ERROR: ', err);
})

function createTabs(item){
    const tabBod = document.createElement('div');

    tabBod.classList.add('tab');

    tabBod.textContent = item;

    return tabBod;
}
const tabPlace = document.querySelector('.topics');