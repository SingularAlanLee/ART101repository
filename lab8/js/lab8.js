/*Author:  Alan Lee
created: 10/27/21
copyright: public domain
*/
const numArr = [1,2,3,4,5,6,7,8,9,0];

function mathOp(x){
  return x+x*2;
}
console.log(numArr.map(mathOp));

console.log(numArr.map(function(x){
    return x-5*x;
    }
  )
);
