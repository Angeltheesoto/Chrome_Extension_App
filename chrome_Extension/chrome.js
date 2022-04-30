
// Assigned variables
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
const tabBtn = document.getElementById('tab-btn');
// Assigned variables

// This lets you take the current tab -
tabBtn.addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
  });
})

if (leadsFromLocalStorage) {
 myLeads = leadsFromLocalStorage
 render(myLeads)
}

function render(leads) {
 let listItems = '';
 for (let i = 0; i < leads.length; i++) {
    // const li = document.createElement('li');
  // li.textContent = myLeads[i]
  // ulEl.append(li)
  // or below
  // listItems += '<li><a target="_blank" href="' + myLeads[i] + '">' + myLeads[i] + '</a></li>';
  // or
  // template literals below
  listItems += `
   <li>
    <a target="_blank" href="${leads[i]}">
     ${leads[i]}
    </a>
   </li>
  `
 }
 ulEl.innerHTML = listItems;
}

// let myLeads = `["www.example.com"]`;
/* Turn myLeads to array */
// myLeads = json.parse(myLeads);
/* Push string */
// myLeads.push("www.lead2.com");
/* Turn Leads to string */
// myLeads = JSON.stringify(myLeads);
/* check if string is a string */
// console.log(typeof myLeads);

/* first local storage */
// localStorage.setItem("helloWorld", "https://www.hbomax.com");
// let name = localStorage.getItem("helloWorld");
// console.log("name");
// localStorage.clear();

// function test() {
//  savedLinks.textContent += "Button Clicked";
// }

deleteBtn.addEventListener('dblclick', function() {
 localStorage.clear()
 myLeads = []
 render(myLeads)
})

// How pros do it - below
inputBtn.addEventListener('click', function() {
 myLeads.push(inputEl.value)
 inputEl.value = "";
 localStorage.setItem("myLeads", JSON.stringify(myLeads) )
 render(myLeads)
})




