var langCode = navigator.language || navigator.systemLanguage;
var lang = langCode.toLowerCase(); lang = lang.substr(0,2);
var dest = window.location.href;
if (lang == "de") {
  dest = dest.replace(/([a-zA-Z]*(\.html)?)$/, function r(x, p1) { return ["de/", p1].join(''); });
} else {
  dest = dest.replace(/([a-zA-Z]*(\.html)?)$/, function r(x, p1) { return ["en/", p1].join(''); });
}
if (window.location.replace) {
  window.location.replace(dest);
} else {
  window.location=dest;
}
