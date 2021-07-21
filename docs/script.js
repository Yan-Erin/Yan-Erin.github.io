const targetDiv = document.getElementById("aboutme");

document.getElementById("about").onclick = function () {
	targetDiv.style.display = "block";
	document.getElementById("projects").style.display="none";
	document.getElementById("educ").style.display = "none";
	document.getElementById("res").style.display = "none";
};


document.getElementById("portfolio").onclick = function () {
	document.getElementById("projects").style.display = "block";
	document.getElementById("aboutme").style.display="none";
	document.getElementById("educ").style.display = "none";
	document.getElementById("res").style.display = "none";

};

document.getElementById("education").onclick = function () {
	document.getElementById("educ").style.display = "block";
	document.getElementById("aboutme").style.display="none";
	document.getElementById("projects").style.display="none";
	document.getElementById("res").style.display = "none";

};

document.getElementById("resume").onclick = function () {
	document.getElementById("res").style.display = "block";
	document.getElementById("aboutme").style.display="none";
	document.getElementById("projects").style.display="none";
	document.getElementById("educ").style.display = "none";

};
