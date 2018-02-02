//I'm not very happy for this. This script is very villa, but working.

var ln = x=window.navigator.language||navigator.browserLanguage;
var ln = ln.substring(0,2);
var lang = window.location.search;
var url = window.location.href;
var en = "lang=en";
var es = "lang=es";

if(!lang.includes(en) && !lang.includes(es))
{
	if((ln != "en") && (ln != "es"))
	{
		location.replace(FormatUrl(url));
	}	
}

function FormatUrl(url){
		var urlFinal;
		var sayvin = "sayvin.com";
		var onlineTravel = "onlineTravel"

		//For domain sayvin
		if(url.includes(sayvin)){
			if(lang == "")
			{
				urlFinal = url+"?"+en; 	
			}
		}

		//For domain onlineTravel
		if(url.includes(onlineTravel)) {
			//var urlPivot = removeSign(url);
			urlFinal = urlPivot+"&"+en; 
		}

		return urlFinal
}

$("html").attr("dir","ltr");