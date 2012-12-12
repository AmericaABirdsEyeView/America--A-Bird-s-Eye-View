function loadMap(fileName) {
	var xmlhttp;
	var loadedText;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			colorMap(xmlhttp.responseText);
		}
		else if(xmlhttp.status==404) {
			makeVisible("NotFound");
		}
		else if(xmlhttp.status==408) {
			makeVisible("Timeout");
		}
	}
	xmlhttp.open("GET", fileName, false);
	xmlhttp.send();
}

function colorMap(textFromFile) {
	var linesFromFile               = textFromFile.split('\n');
	var totalNumberOfPositiveTweets = 0;
	var totalNumberOfTweets         = 0;
	for (var currentLineNumber = 0; currentLineNumber < 51; currentLineNumber++) {
		
		var lineFromFile                  = linesFromFile[currentLineNumber];
		var sectionsInLine                = lineFromFile.split('|');
		var currentState                  = sectionsInLine[0];
		var currentNumberOfPositiveTweets = parseFloat(sectionsInLine[1]);
		var currentNumberOfNegativeTweets = parseFloat(sectionsInLine[2]);
		var currentNumberOfTotalTweets    = currentNumberOfNegativeTweets + currentNumberOfPositiveTweets;
		var currentStateMapId             = "#map_" + currentState.replace(/\s/g, "").toLowerCase();

		totalNumberOfPositiveTweets = totalNumberOfPositiveTweets + currentNumberOfPositiveTweets;
		totalNumberOfTweets         = totalNumberOfTweets + currentNumberOfTotalTweets;
		
		//alert(totalNumberOfPositiveTweets.toString());
		//alert(totalNumberOfTweets.toString());
	
		var currentApprovalRating = 0.0;
		if(currentNumberOfTotalTweets > 0) {
			currentApprovalRating = currentNumberOfPositiveTweets / currentNumberOfTotalTweets;
		}
		else if(currentNumberOfTotalTweets == 0) {
			currentApprovalRating = .5;
		}
		else {
			currentApprovalRating = -1;
		}

		
		// 80-100% approval ratings
		if(currentApprovalRating <= 1.0 && currentApprovalRating >= 0.95) {
			$(currentStateMapId).css("fill","#000033");
		}
		else if(currentApprovalRating >= 0.9) {
			$(currentStateMapId).css("fill","#000066");
		}
		else if(currentApprovalRating >= 0.85) {
			$(currentStateMapId).css("fill","#000099");
		}
		else if(currentApprovalRating >= 0.8) {
			$(currentStateMapId).css("fill","#0000CC");
		}
		
		// 60-80% approval ratings
		else if(currentApprovalRating >= 0.75) {
			$(currentStateMapId).css("fill","#0000FF");
		}
		else if(currentApprovalRating >= 0.7) {
			$(currentStateMapId).css("fill","#0033FF");
		}
		else if(currentApprovalRating >= 0.65) {
			$(currentStateMapId).css("fill","#0066FF");
		}
		else if(currentApprovalRating >= 0.6) {
			$(currentStateMapId).css("fill","#0099FF");
		}
		
		// 40-60% approval ratings
		else if(currentApprovalRating >= 0.55) {
			$(currentStateMapId).css("fill","#00CCFF");
		}
		else if(currentApprovalRating >= 0.5) {
			$(currentStateMapId).css("fill","#66CCFF");
		}
		else if(currentApprovalRating >= 0.45) {
			$(currentStateMapId).css("fill","#FFCCCC");
		}
		else if(currentApprovalRating >= 0.4) {
			$(currentStateMapId).css("fill","#FF9999");
		}
		
		// 20-40% approval ratings
		else if(currentApprovalRating >= 0.35) {
			$(currentStateMapId).css("fill","#FF6666");
		}
		else if(currentApprovalRating >= 0.3) {
			$(currentStateMapId).css("fill","#FF3333");
		}
		else if(currentApprovalRating >= 0.25) {
			$(currentStateMapId).css("fill","#FF0000");
		}
		else if(currentApprovalRating >= 0.2) {
			$(currentStateMapId).css("fill","#CC0000");
		}
		
		// 0-20% approval ratings
		else if(currentApprovalRating >= 0.15) {
			$(currentStateMapId).css("fill","#990000");
		}
		else if(currentApprovalRating >= 0.1) {
			$(currentStateMapId).css("fill","#660000");
		}
		else if(currentApprovalRating >= 0.05) {
			$(currentStateMapId).css("fill","#330000");
		}
		else if(currentApprovalRating >= 0.0) {
			$(currentStateMapId).css("fill","#000000");
		}
		
		// Error
		else {
			$(currentStateMapId).css("fill","white");
		}
		
		$(currentStateMapId).attr("title", currentState + "\nApproval Rating: " + (currentApprovalRating * 100).toFixed(2) + "%\nNumber Of Tweets: " + currentNumberOfTotalTweets);
	}

	var nationalApprovalRatingNumber = (totalNumberOfPositiveTweets / totalNumberOfTweets);
	document.getElementById("nationalApprovalRating").innerHTML = (nationalApprovalRatingNumber * 100).toFixed(1).toString() + "%";
	
	// 80-100% approval ratings
	if(nationalApprovalRatingNumber <= 1.0 && nationalApprovalRatingNumber >= 0.95) {
		$('#nationalApprovalRating').css("color","#000033");
	}
	else if(nationalApprovalRatingNumber >= 0.9) {
		$('#nationalApprovalRating').css("color","#000066");
	}
	else if(nationalApprovalRatingNumber >= 0.85) {
		$('#nationalApprovalRating').css("color","#000099");
	}
	else if(nationalApprovalRatingNumber >= 0.8) {
		$('#nationalApprovalRating').css("color","#0000CC");
	}
	
	// 60-80% approval ratings
	else if(nationalApprovalRatingNumber >= 0.75) {
		$('#nationalApprovalRating').css("color","#0000FF");
	}
	else if(nationalApprovalRatingNumber >= 0.7) {
		$('#nationalApprovalRating').css("color","#0033FF");
	}
	else if(nationalApprovalRatingNumber >= 0.65) {
		$('#nationalApprovalRating').css("color","#0066FF");
	}
	else if(nationalApprovalRatingNumber >= 0.6) {
		$('#nationalApprovalRating').css("color","#0099FF");
	}
	
	// 40-60% approval ratings
	else if(nationalApprovalRatingNumber >= 0.55) {
		$('#nationalApprovalRating').css("color","#00CCFF");
	}
	else if(nationalApprovalRatingNumber >= 0.5) {
		$('#nationalApprovalRating').css("color","#66CCFF");
	}
	else if(nationalApprovalRatingNumber >= 0.45) {
		$('#nationalApprovalRating').css("color","#FFCCCC");
	}
	else if(nationalApprovalRatingNumber >= 0.4) {
		$('#nationalApprovalRating').css("color","#FF9999");
	}
	
	// 20-40% approval ratings
	else if(nationalApprovalRatingNumber >= 0.35) {
		$('#nationalApprovalRating').css("color","#FF6666");
	}
	else if(nationalApprovalRatingNumber >= 0.3) {
		$('#nationalApprovalRating').css("color","#FF3333");
	}
	else if(nationalApprovalRatingNumber >= 0.25) {
		$('#nationalApprovalRating').css("color","#FF0000");
	}
	else if(nationalApprovalRatingNumber >= 0.2) {
		$('#nationalApprovalRating').css("color","#CC0000");
	}
	
	// 0-20% approval ratings
	else if(nationalApprovalRatingNumber >= 0.15) {
		$('#nationalApprovalRating').css("color","#990000");
	}
	else if(nationalApprovalRatingNumber >= 0.1) {
		$('#nationalApprovalRating').css("color","#660000");
	}
	else if(nationalApprovalRatingNumber >= 0.05) {
		$('#nationalApprovalRating').css("color","#330000");
	}
	else if(nationalApprovalRatingNumber >= 0.0) {
		$('#nationalApprovalRating').css("color","#000000");
	}
	
	// Error
	else {
		$('#nationalApprovalRating').css("color","white");
	}
}