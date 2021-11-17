/*
Author: Alan Lee
Date created: 11/15/2021
Copyright: Public domain
*/
function SortingHat(str)
{
  const houses = ["Gryffindor.  Students in this house display courage, chivalry, and determination.", "Ravenclaw.  Students in this house display great wit, learning, and wisdom.", "Slytherin.  Students in this house display ambition, shrewdness, and cunning.", "Hufflepuff.  Students from this house display patience, fairness, strong work ethic."];
  var len = str.length;
  mod = len % 4;
  return houses[mod];
}

$("button.sort").click(function(){
  var name = document.getElementById("input").value;
  var house = SortingHat(name);
  document.getElementById("output").innerHTML = "<p>The Sorting Hat sorted you into " + house + "</p>";
  }
)
