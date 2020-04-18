// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const header = document.createElement('div'); // create header element
    header.classList.add('header'); // add header class to element

    const date = document.createElement('span'); // create date element
    date.classList.add('date'); // add date class to element
    date.innerText = 'MARCH 28, 2019'; // add text to date element
    header.appendChild(date); // append date to header element

    const h1 = document.createElement('h1'); // create h1 element
    h1.innerText = 'Lambda Times'; // add text inside h1
    header.appendChild(h1); // append h1 to header element

    const temp = document.createElement('span'); // create temp element
    temp.classList.add('temp'); // add temp class to element
    temp.innerText = '98°';  // add text to temp element

    return header;
}

document.getElementsByClassName('header-container')[0].appendChild(Header()); // append new header to .header-container