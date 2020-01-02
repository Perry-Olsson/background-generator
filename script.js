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

color1.setAttribute("value", "#ff0000");
color2.setAttribute("value", "#ffff00");
css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", function () {
	color1.value = generateHex();
	color2.value = generateHex();
	setGradient();
})