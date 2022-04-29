
// Assigned variables
let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById("delete-btn");
// Assigned variables

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
  listItems += `
   <li>
    <a target="_blank" href="${myLeads[i]}">
     ${myLeads[i]}
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

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

// How pros do it - below
inputBtn.addEventListener('click', function() {
 myLeads.push(inputEl.value)
 inputEl.value = "";
 localStorage.setItem("myLeads", JSON.stringify(myLeads) )
 render(myLeads)
})




