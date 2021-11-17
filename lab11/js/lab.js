/*author: Alan Lee
date: 11/2/2021
copyright: open source
*/
$("button.red").click(function(){
  $("#output").removeClass('red')
  $("#output").toggleClass('blue')
});

$("button.green").click(function(){
  $("#buttoning").removeClass('purple')
  $("#buttoning").toggleClass('green')
});

$("button.purple").click(function(){
  $("#buttonMash").removeClass('green')
  $("#buttonMash").toggleClass('purple')
});
