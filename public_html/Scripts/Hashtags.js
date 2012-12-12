function loadHashtags(fileName) {
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
			displayHashtags(xmlhttp.responseText);
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

function displayHashtags(textForm) {
	var linesFromFile = textForm.split('\n');
	var hashtag1  = linesFromFile[0]
	var hashtag2  = linesFromFile[1];
	var hashtag3  = linesFromFile[2];
	var hashtag4  = linesFromFile[3];
	var hashtag5  = linesFromFile[4];
	var hashtag6  = linesFromFile[5];
	var hashtag7  = linesFromFile[6];
	var hashtag8  = linesFromFile[7];
	var hashtag9  = linesFromFile[8];
	var hashtag10 = linesFromFile[9];
	
	document.getElementById("hashtag1Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=http://twitter.com/search/%23\"" + hashtag1 + "\" />";
	document.getElementById("hashtag2Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=http://twitter.com/search/%23\"" + hashtag2 + "\" />";
	document.getElementById("hashtag3Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=http://twitter.com/search/%23\"" + hashtag3 + "\" />";
	document.getElementById("hashtag4Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=http://twitter.com/search/%23\"" + hashtag4 + "\" />";
	document.getElementById("hashtag5Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=http://twitter.com/search/%23\"" + hashtag5 + "\" />";
	document.getElementById("hashtag6Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=http://twitter.com/search/%23\"" + hashtag6 + "\" />";
	document.getElementById("hashtag7Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=http://twitter.com/search/%23\"" + hashtag7 + "\" />";
	document.getElementById("hashtag8Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=http://twitter.com/search/%23\"" + hashtag8 + "\" />";
	document.getElementById("hashtag9Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=http://twitter.com/search/%23\"" + hashtag9 + "\" />";
	document.getElementById("hashtag10Link").innerHTML = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=http://twitter.com/search/%23\"" + hashtag10 + "\" />";
	
	document.getElementById("hashtag1Name").innerHTML  = hashtag1;
	document.getElementById("hashtag2Name").innerHTML  = hashtag2;
	document.getElementById("hashtag3Name").innerHTML  = hashtag3;
	document.getElementById("hashtag4Name").innerHTML  = hashtag4;
	document.getElementById("hashtag5Name").innerHTML  = hashtag5;
	document.getElementById("hashtag6Name").innerHTML  = hashtag6;
	document.getElementById("hashtag7Name").innerHTML  = hashtag7;
	document.getElementById("hashtag8Name").innerHTML  = hashtag8;
	document.getElementById("hashtag9Name").innerHTML  = hashtag9;
	document.getElementById("hashtag10Name").innerHTML = hashtag10;
	
	document.getElementById("hashtag1TwitterLink").href  = "https:\/\/twitter.com\/search\/?q=%23" + hashtag1;
	document.getElementById("hashtag2TwitterLink").href  = "https:\/\/twitter.com\/search\/?q=%23" + hashtag2;
	document.getElementById("hashtag3TwitterLink").href  = "https:\/\/twitter.com\/search\/?q=%23" + hashtag3;
	document.getElementById("hashtag4TwitterLink").href  = "https:\/\/twitter.com\/search\/?q=%23" + hashtag4;
	document.getElementById("hashtag5TwitterLink").href  = "https:\/\/twitter.com\/search\/?q=%23" + hashtag5;
	document.getElementById("hashtag6TwitterLink").href  = "https:\/\/twitter.com\/search\/?q=%23" + hashtag6;
	document.getElementById("hashtag7TwitterLink").href  = "https:\/\/twitter.com\/search\/?q=%23" + hashtag7;
	document.getElementById("hashtag8TwitterLink").href  = "https:\/\/twitter.com\/search\/?q=%23" + hashtag8;
	document.getElementById("hashtag9TwitterLink").href  = "https:\/\/twitter.com\/search\/?q=%23" + hashtag9;
	document.getElementById("hashtag10TwitterLink").href = "https:\/\/twitter.com\/search\/?q=%23" + hashtag10;
	
	document.getElementById("hashtag1UserName").innerHTML   = "#" + hashtag1;
	document.getElementById("hashtag2UserName").innerHTML   = "#" + hashtag2;
	document.getElementById("hashtag3UserName").innerHTML   = "#" + hashtag3;
	document.getElementById("hashtag4UserName").innerHTML   = "#" + hashtag4;
	document.getElementById("hashtag5UserName").innerHTML   = "#" + hashtag5;
	document.getElementById("hashtag6UserName").innerHTML   = "#" + hashtag6;
	document.getElementById("hashtag7UserName").innerHTML   = "#" + hashtag7;
	document.getElementById("hashtag8UserName").innerHTML   = "#" + hashtag8;
	document.getElementById("hashtag9UserName").innerHTML   = "#" + hashtag9;
	document.getElementById("hashtag10UserName").innerHTML  = "#" + hashtag10;
}