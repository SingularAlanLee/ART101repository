/*author: Alan Lee
date: 11/2/2021
copyright: open source
*/

//copied from lecture

//create event handler within JS listening for button click
var buttonEl = document.getElementById("myButton");
//prompt user for their name upon button press
buttonEl.addEventListener("click", function(){
  var name = prompt("Please enter your name: ")
  var headingEl = document.getElementById("title");
  headingEl.innerHTML = "Hello, " + name;
  }
)
function putNameInTitle(){
  var field = document.getElementById("myField");
  var name = field.value;
  var headingEl = document.getElementById("title");
  headingEl.innerHTML = "Hello, " + name;
}

//var buttonEl = document.getElementById("myButton");
buttonEl.addEventListener("click", putNameInTitle);

//copied from lab 7
function sortButton(string){
  const temp = string.split("");
  sortedName = temp.sort();
  return sortedName.toString();
}

//merge the two
var inputEl = document.getElementById("user-name");
inputEl.addEventListener("click", function(){
  var headingEl = document.getElementById("user-name");
  headingEl.innerHTML = sortButton(headingEl);
  }
)
