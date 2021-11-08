/*Author:  Alan Lee
Date Written :  11/1/2021
Copyright:  public domain
*/
var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
new1El.innerHTML = "Hello there!";
var new2El = document.createElement("another1");
new2El.innerHTML = "Another one.";
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
