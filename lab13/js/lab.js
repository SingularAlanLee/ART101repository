
/*Author: Alan Lee
Date:  11/17/2021
Copyright: Public domain
*/
function fizzBuzzBoom(){
  bigOne = [];
  for(var i = 1; i<201;i++){
    str = "";
    if (i % 5 == 0){str += "Buzz";}
    else if (i % 3 == 0){str +="Fizz";}
    else if (i%7 == 0){str += "Boom";}
    else{str += i;}
    bigOne.push(str + "\n");
  }
  return bigOne;
}
document.getElementById("output").innerHTML = fizzBuzzBoom();
