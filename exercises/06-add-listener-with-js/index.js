window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	let btnGreen = document.getElementById("theGreen");
	btnGreen.addEventListener("click", message);
};

//the listener function here

function message() {
	alert("wuju");
}
