/*Author: Alan Lee
*Created: 10/25/2021
*Copyright: Public Domain
*/
function sortUsername(){
  var userName = window.prompt("Please enter your name.");
  const temp = userName.split("");
  sortedName = temp.sort();
  return sortedName.toString();
}
document.writeln("Your name sorted: ",sortUsername(), "</br>");
