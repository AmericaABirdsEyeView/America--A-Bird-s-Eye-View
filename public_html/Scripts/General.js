function makeInvisible() {
	document.getElementById("NoAmerica")  .style.visibility = "hidden";
	document.getElementById("NoPresident").style.visibility = "hidden";
	document.getElementById("NoInternet") .style.visibility = "hidden";
	document.getElementById("NoTwitter")  .style.visibility = "hidden";
	document.getElementById("NoKnowledge").style.visibility = "hidden";
	document.getElementById("Today")      .style.visibility = "hidden";
	document.getElementById("Future")     .style.visibility = "hidden";
	document.getElementById("Josue")      .style.visibility = "hidden";
	document.getElementById("Data")       .style.visibility = "hidden";
	document.getElementById("Timeout")    .style.visibility = "hidden";
	document.getElementById("Error")      .style.visibility = "hidden";
	document.getElementById("NotFound")   .style.visibility = "hidden";
	document.getElementById("ProjectOver").style.visibility = "hidden";
}
	
function makeVisible(visibleId) {
	makeInvisible();
	document.getElementById(visibleId).style.visibility = "visible";
}


function replaceAll(originalText, unwantedSequence, wantedSequence) {
	return originalText.replace(new RegExp(unwantedSequence, 'g'), wantedSequence);
}