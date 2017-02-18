var word = ["Bass"];
console.log(word);
console.log(word.length);
function play(){
var guess = word[Math.floor(Math.random()*word.length)];
var guess = guess.toLowerCase();
var letters = guess.split("");
console.log(letters);
var blank = " ";
var space = guess.length * blank.length;
var i;
for (i = 0; i < space; i++) {
blank ="_" + " ";
document.getElementById('print').innerHTML=(blank);	
document.onkeyup = function(event){
var playerGuess= event.key;
var playerGuess=playerGuess.toLowerCase();
for (var x = 0; x< letters.length; x++){
var check = letters[x].indexOf(playerGuess);
console.log(playerGuess);
console.log(check);
if (check == -1 ) {
	document.getElementById('wrong').innerHTML=(playerGuess);
}
else 
document.getElementById('letter').innerHTML=(playerGuess);
}
}
}
}