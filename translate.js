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
		TranslateWeb(url);
	}	
}

function TranslateWeb(url){

	//set true for redirect other language
	var redirect = false;
	var urlFinal;

	//define domains
	var sayvin = "sayvin.com";
	var onlineTravel = "onlinetravel"

	//For domain sayvin
	if(url.includes(sayvin)){
		//TODO: añadir condicion de que si tiene seteado un "lang=" diferente al ingles o español
		if(lang == "")
			{
				urlFinal = url+"?"+en; 	
				redirect = true;
			}
	}

	//For domain onlineTravel
	if(url.includes(onlineTravel)) {
		var urlPivot = removeChar(url);
		urlFinal = urlPivot+"&"+en; 
		//urlFinal = url+"&"+en; 
		redirect = true;
	}

	if(redirect){
		//Redirect(urlFinal);	
		location.replace(urlFinal);	
	}
}

function removeChar(url){
	var urlWithoutChar = url.replace("#","");
	return urlWithoutChar;
}

function Redirect(url){
	location.replace(url);	
}

$("html").attr("dir","ltr");