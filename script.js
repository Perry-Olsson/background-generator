var _ = require('lodash');


var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer:', _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	
	css.textContent = body.style.background + ";";
}

function generateHex() {
	var hexColor= '#';
	var hexString = '0123456789abcdef'
	for (var i = 0; i < 6; i++) {
		hexColor += hexString[Math.round(Math.random() * 15)];
	}
	return hexColor;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", function () {
	color1.value = generateHex();
	color2.value = generateHex();
	setGradient();
})