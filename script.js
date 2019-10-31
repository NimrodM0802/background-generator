
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");
var btnRefresh = document.querySelector(".btn-refresh");

// Generate random number for rgb colors
function randomGen() {
	return Math.floor(Math.random() * 256)
}

// Assign random numbers to generate random colors
var rgbArray = [
	{
		r: randomGen(),
		g: randomGen(),
		b: randomGen()
	},
	{
		r: randomGen(),
		g: randomGen(),
		b: randomGen()
	}
]


// Set color based on user input
function setGradient() {
	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value +")";
	css.textContent = body.style.background + ";";
}

// Set color based randomly
function randomGradient() {
	var rColor1 = "rgb(" + rgbArray[0].r + ", " + rgbArray[0].g + ", " + rgbArray[0].b +")";
	var rColor2 = "rgb(" + rgbArray[1].r + ", " + rgbArray[1].g + ", " + rgbArray[1].b +")";
	body.style.background = "linear-gradient(to right," + rColor1 + ", " + rColor2 +")";
	css.textContent = body.style.background + ";";
}
function refreshPage(){
    window.location.reload();
}

// generate random gradient
randomBtn.addEventListener("click", randomGradient);
btnRefresh.addEventListener("click", refreshPage);

// generate gradient based on user input
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//display default gradient on load
setGradient();