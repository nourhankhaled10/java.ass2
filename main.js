function randomQuotes() {
 var quotes = [" “You only live once, but if you do it right, once is enough.”" , "You miss 100% of the shots you don't take." ,"“So many books, so little time.”","“A room without books is like a body without a soul.”"];
var author = ["― Mae West","― Frank Zappa","― Marcus Tullius Cicero","― Marcus Tullius Cicero"];



var num = Math.floor(Math.random() * quotes.length);

 document.getElementById('quote').innerHTML= quotes[num];
 document.getElementById('speaker').innerHTML= author[num];
}