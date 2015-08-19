var langCode = navigator.language || navigator.systemLanguage;
var lang = langCode.toLowerCase(); lang = lang.substr(0,2);
var dest = window.location.href;
if (lang == "de") {
  dest = "/de/index.html";
} else {
  dest = "/en/index.html";
}
if (window.location.replace) {
  window.location.replace(dest);
} else {
  window.location=dest;
}

                    
