
// Assigned variables
let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById('input-btn');
let ulEl = document.getElementById('ul-el');
let myLeads = [];

// function test() {
//  savedLinks.textContent += "Button Clicked";
// }

// How pros do it - below
inputBtn.addEventListener('click', function() {
 myLeads.push(inputEl.value)
 inputEl.value = '';
 renderLeads();
 // savedLinks.innerHTML += inputEl;
})

function renderLeads() {
 let listItems = '';
 for (let i = 0; i < myLeads.length; i++) {

  // listItems += '<li><a target="_blank" href="' + myLeads[i] + '">' + myLeads[i] + '</a></li>';
  // or
  listItems += `
   <li>
    <a target="_blank" href="${myLeads[i]}">
     ${myLeads[i]}
    </a>
   </li>
  `



  // or below
  // const li = document.createElement('li');
  // li.textContent = myLeads[i]
  // ulEl.append(li)
 }
 ulEl.innerHTML = listItems;
}


