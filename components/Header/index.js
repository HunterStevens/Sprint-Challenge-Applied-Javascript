// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(data) {
    const headBod = document.createElement('div'),
        headDate  = document.createElement('span'),
        headTitle  = document.createElement('h1'),
        headTemp  = document.createElement('span');
        
    headBod.classList.add('header');
    headDate.classList.add('date');
    headTemp.classList.add('temp');

    headBod.append(headDate, headTitle, headTemp);

    headDate.textContent = 'March 13, 2020';
    headTitle.textContent = 'Lambda Times';
    headTemp.textContent = '98';
}

const headPlace = document.querySelector('.header-container');
