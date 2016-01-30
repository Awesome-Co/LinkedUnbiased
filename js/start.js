var link = document.createElement('link');
link.href =  chrome.extension.getURL('css/linkedin.min.css');
link.rel = 'stylesheet';
var head = document.getElementsByTagName('head')[0] || document.documentElement;
head.insertBefore(link, head.firstChild);
