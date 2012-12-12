function loadTweets(fileName) {
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
			displayTweets(xmlhttp.responseText);
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

function displayTweets(textForm) {
	var linesFromFile = textForm.split('\n');
	var tweet1  = eval('(' + linesFromFile[0] + ')');
	var tweet2  = eval('(' + linesFromFile[1] + ')');
	var tweet3  = eval('(' + linesFromFile[2] + ')');
	var tweet4  = eval('(' + linesFromFile[3] + ')');
	var tweet5  = eval('(' + linesFromFile[4] + ')');
	var tweet6  = eval('(' + linesFromFile[5] + ')');
	var tweet7  = eval('(' + linesFromFile[6] + ')');
	var tweet8  = eval('(' + linesFromFile[7] + ')');
	var tweet9  = eval('(' + linesFromFile[8] + ')');
	var tweet10 = eval('(' + linesFromFile[9] + ')');
	
	document.getElementById("tweet1Link").innerHTML  = "<img class=\"media-object\" src=\"" + tweet1.user.profile_image_url + "\">";
	document.getElementById("tweet2Link").innerHTML  = "<img class=\"media-object\" src=\"" + tweet2.user.profile_image_url + "\">";
	document.getElementById("tweet3Link").innerHTML  = "<img class=\"media-object\" src=\"" + tweet3.user.profile_image_url + "\">";
	document.getElementById("tweet4Link").innerHTML  = "<img class=\"media-object\" src=\"" + tweet4.user.profile_image_url + "\">";
	document.getElementById("tweet5Link").innerHTML  = "<img class=\"media-object\" src=\"" + tweet5.user.profile_image_url + "\">";
	document.getElementById("tweet6Link").innerHTML  = "<img class=\"media-object\" src=\"" + tweet6.user.profile_image_url + "\">";
	document.getElementById("tweet7Link").innerHTML  = "<img class=\"media-object\" src=\"" + tweet7.user.profile_image_url + "\">";
	document.getElementById("tweet8Link").innerHTML  = "<img class=\"media-object\" src=\"" + tweet8.user.profile_image_url + "\">";
	document.getElementById("tweet9Link").innerHTML  = "<img class=\"media-object\" src=\"" + tweet9.user.profile_image_url + "\">";
	document.getElementById("tweet10Link").innerHTML = "<img class=\"media-object\" src=\"" + tweet10.user.profile_image_url + "\">";
	
	document.getElementById("tweet1Name").innerHTML  = tweet1.user.name;
	document.getElementById("tweet2Name").innerHTML  = tweet2.user.name;
	document.getElementById("tweet3Name").innerHTML  = tweet3.user.name;
	document.getElementById("tweet4Name").innerHTML  = tweet4.user.name;
	document.getElementById("tweet5Name").innerHTML  = tweet5.user.name;
	document.getElementById("tweet6Name").innerHTML  = tweet6.user.name;
	document.getElementById("tweet7Name").innerHTML  = tweet7.user.name;
	document.getElementById("tweet8Name").innerHTML  = tweet8.user.name;
	document.getElementById("tweet9Name").innerHTML  = tweet9.user.name;
	document.getElementById("tweet10Name").innerHTML = tweet10.user.name;
	
	document.getElementById("tweet1Text").innerHTML  = linkify(tweet1.text);
	document.getElementById("tweet2Text").innerHTML  = linkify(tweet2.text);
	document.getElementById("tweet3Text").innerHTML  = linkify(tweet3.text);
	document.getElementById("tweet4Text").innerHTML  = linkify(tweet4.text);
	document.getElementById("tweet5Text").innerHTML  = linkify(tweet5.text);
	document.getElementById("tweet6Text").innerHTML  = linkify(tweet6.text);
	document.getElementById("tweet7Text").innerHTML  = linkify(tweet7.text);
	document.getElementById("tweet8Text").innerHTML  = linkify(tweet8.text);
	document.getElementById("tweet9Text").innerHTML  = linkify(tweet9.text);
	document.getElementById("tweet10Text").innerHTML = linkify(tweet10.text);
	
	document.getElementById("tweet1TwitterLink").href  = "https:\/\/twitter.com\/" + tweet1.user.screen_name;
	document.getElementById("tweet2TwitterLink").href  = "https:\/\/twitter.com\/" + tweet2.user.screen_name;
	document.getElementById("tweet3TwitterLink").href  = "https:\/\/twitter.com\/" + tweet3.user.screen_name;
	document.getElementById("tweet4TwitterLink").href  = "https:\/\/twitter.com\/" + tweet4.user.screen_name;
	document.getElementById("tweet5TwitterLink").href  = "https:\/\/twitter.com\/" + tweet5.user.screen_name;
	document.getElementById("tweet6TwitterLink").href  = "https:\/\/twitter.com\/" + tweet6.user.screen_name;
	document.getElementById("tweet7TwitterLink").href  = "https:\/\/twitter.com\/" + tweet7.user.screen_name;
	document.getElementById("tweet8TwitterLink").href  = "https:\/\/twitter.com\/" + tweet8.user.screen_name;
	document.getElementById("tweet9TwitterLink").href  = "https:\/\/twitter.com\/" + tweet9.user.screen_name;
	document.getElementById("tweet10TwitterLink").href = "https:\/\/twitter.com\/" + tweet10.user.screen_name;
	
	document.getElementById("tweet1UserName").innerHTML   = "@" + tweet1.user.screen_name;
	document.getElementById("tweet2UserName").innerHTML   = "@" + tweet2.user.screen_name;
	document.getElementById("tweet3UserName").innerHTML   = "@" + tweet3.user.screen_name;
	document.getElementById("tweet4UserName").innerHTML   = "@" + tweet4.user.screen_name;
	document.getElementById("tweet5UserName").innerHTML   = "@" + tweet5.user.screen_name;
	document.getElementById("tweet6UserName").innerHTML   = "@" + tweet6.user.screen_name;
	document.getElementById("tweet7UserName").innerHTML   = "@" + tweet7.user.screen_name;
	document.getElementById("tweet8UserName").innerHTML   = "@" + tweet8.user.screen_name;
	document.getElementById("tweet9UserName").innerHTML   = "@" + tweet9.user.screen_name;
	document.getElementById("tweet10UserName").innerHTML  = "@" + tweet10.user.screen_name;
}