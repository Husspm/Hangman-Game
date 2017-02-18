$(document).ready(function(){
var inst = ["Bass", "Drums", "Piano","Cello", "Violin", "Guitar", "Saxophone", " "];
var letters = [];
var wGuess = [];
var blank = [];
var x = -1;
var y = -1;
$("#play").on("click", function grab(){
var wGuess = [];
var guess = inst.shift();
if (inst.length == 0) {
$("#print").html("You Won!");
}else{ 
var blank = [];
guess = guess.toLowerCase();
letters = guess.split("");
$("#print").html(" ");
$("#wrong").html(" ");
letters.forEach(print);
function print() {
blank.push("_");  
}
for (i = 0; i<blank.length; i++){
$("#print").append(blank[i] + " ");
}
}
document.onkeyup = function(Event){
var pGuess = Event.key;
pGuess = pGuess.toLowerCase();
var x = letters.indexOf(pGuess);
var y = letters.lastIndexOf(pGuess);
if (( x == -1) &&
	(wGuess.indexOf(pGuess) == -1) && 
	(pGuess.length<=1)) 
{
wGuess.push(pGuess);
$("#wrong").append(pGuess + " ");
}
else if ((x || y > -1) && 
	(pGuess.length<=1) &&
	(wGuess.indexOf(pGuess)<0))
	 {
blank.splice(x, 1, pGuess + " ");	
blank.splice(y, 1, pGuess + " ");
$("#print").empty(); 	
for (i = 0; i<blank.length; i++){
$("#print").append(blank[i] + " ");
}
}
else if (blank.indexOf("_")<0){
$("#wrong").html("You got it");	
}
}
});
});