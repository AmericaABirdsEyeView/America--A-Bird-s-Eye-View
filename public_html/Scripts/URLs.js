function loadURLs(fileName) {
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
			displayURLs(xmlhttp.responseText);
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

function displayURLs(textForm) {
	var linesFromFile = textForm.split('\n');

	var url1  = linesFromFile[0].split("||")[0];
	var url2  = linesFromFile[1].split("||")[0];
	var url3  = linesFromFile[2].split("||")[0];
	var url4  = linesFromFile[3].split("||")[0];
	var url5  = linesFromFile[4].split("||")[0];
	var url6  = linesFromFile[5].split("||")[0];
	var url7  = linesFromFile[6].split("||")[0];
	var url8  = linesFromFile[7].split("||")[0];
	var url9  = linesFromFile[8].split("||")[0];
	var url10 = linesFromFile[9].split("||")[0];
	
	var url1Title  = linesFromFile[0].split("||")[1];
	var url2Title  = linesFromFile[1].split("||")[1];
	var url3Title  = linesFromFile[2].split("||")[1];
	var url4Title  = linesFromFile[3].split("||")[1];
	var url5Title  = linesFromFile[4].split("||")[1];
	var url6Title  = linesFromFile[5].split("||")[1];
	var url7Title  = linesFromFile[6].split("||")[1];
	var url8Title  = linesFromFile[7].split("||")[1];
	var url9Title  = linesFromFile[8].split("||")[1];
	var url10Title = linesFromFile[9].split("||")[1];

	document.getElementById("url1Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=\"" + url1 + "\" />";
	document.getElementById("url2Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=\"" + url2 + "\" />";
	document.getElementById("url3Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=\"" + url3 + "\" />";
	document.getElementById("url4Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=\"" + url4 + "\" />";
	document.getElementById("url5Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=\"" + url5 + "\" />";
	document.getElementById("url6Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=\"" + url6 + "\" />";
	document.getElementById("url7Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=\"" + url7 + "\" />";
	document.getElementById("url8Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=\"" + url8 + "\" />";
	document.getElementById("url9Link").innerHTML  = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=\"" + url9 + "\" />";
	document.getElementById("url10Link").innerHTML = "<img width=\"64\" height=\"64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"http://webthumb.web-backlinks.net/thumb.php?img=\"" + url10 + "\" />";
	
	document.getElementById("url1Name").innerHTML  = url1Title;
	document.getElementById("url2Name").innerHTML  = url2Title;
	document.getElementById("url3Name").innerHTML  = url3Title;
	document.getElementById("url4Name").innerHTML  = url4Title;
	document.getElementById("url5Name").innerHTML  = url5Title;
	document.getElementById("url6Name").innerHTML  = url6Title;
	document.getElementById("url7Name").innerHTML  = url7Title;
	document.getElementById("url8Name").innerHTML  = url8Title;
	document.getElementById("url9Name").innerHTML  = url9Title;
	document.getElementById("url10Name").innerHTML = url10Title;
	
	document.getElementById("url1TwitterLink").href  = url1;
	document.getElementById("url2TwitterLink").href  = url2;
	document.getElementById("url3TwitterLink").href  = url3;
	document.getElementById("url4TwitterLink").href  = url4;
	document.getElementById("url5TwitterLink").href  = url5;
	document.getElementById("url6TwitterLink").href  = url6;
	document.getElementById("url7TwitterLink").href  = url7;
	document.getElementById("url8TwitterLink").href  = url8;
	document.getElementById("url9TwitterLink").href  = url9;
	document.getElementById("url10TwitterLink").href = url10;
	
	document.getElementById("url1UserName").innerHTML   = url1;
	document.getElementById("url2UserName").innerHTML   = url2;
	document.getElementById("url3UserName").innerHTML   = url3;
	document.getElementById("url4UserName").innerHTML   = url4;
	document.getElementById("url5UserName").innerHTML   = url5;
	document.getElementById("url6UserName").innerHTML   = url6;
	document.getElementById("url7UserName").innerHTML   = url7;
	document.getElementById("url8UserName").innerHTML   = url8;
	document.getElementById("url9UserName").innerHTML   = url9;
	document.getElementById("url10UserName").innerHTML  = url10;
}