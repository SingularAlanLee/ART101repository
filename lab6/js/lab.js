/*Author: Alan Lee
*Created: 10/20/2021
*Copyright: Public Domain
*/
function transportInfo{
  var myTransport = ["car", "bike", "foot"];
  var myMainRide = {type:"Ford", make:"Taurus", year:1997};}

  document.writeIn("Getting around: "+ transportInfo() + "<br>");
  document.writeIn("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t', "</pre>"));
