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
		
		if(lang == "")
		{
			location.replace(url+"?"+en); 
		}else {
			location.replace(url+"&"+en); 
		}

		return urlFinal
}

$("html").attr("dir","ltr");