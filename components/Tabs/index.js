// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// console.log(axios.get('https://lambda-times-backend.herokuapp.com/topics'));

function Tab(topic) {
    const tab = document.createElement('div') // create tab element
    tab.classList.add('tab') // add tab class to element
    tab.innerText = topic; // add text to element from passed in topic

    return tab;
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(topicsData => {
        const topics = topicsData.data.topics; // assign topics to data array of topics recieved
        const topicsContainer = document.querySelector('.topics'); // get container from DOM
        topics.forEach(topic => topicsContainer.appendChild(Tab(topic))); // create and append each topic tab from array
    })
    .catch(() => alert('AXIOS REQUEST FAILED')) // if axios request fails, alert