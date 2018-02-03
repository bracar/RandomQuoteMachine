var getRandom = function(){
    return Math.floor(Math.random() * quotes.length);
}; 
var quote = quotes[getRandom()];
var showQuote = function (quote){
    document.getElementById("quote").innerHTML ='"'+ quote.quote + '"';
    document.getElementById("author").innerHTML = quote.author;
};

function updateQuote(){
    var path = "https://talaikis.com/api/quotes/random/";
    var request = new XMLHttpRequest();
    // get quote AJAX or local
    request.onreadystatechange = function(){
        if(this.status == 200 && request.readyState == 4){
            var response = JSON.parse(this.responseText);
            quote = response;
        }else{
            quote = quotes[getRandom()];
        }
    };
    request.open("GET", path);
    request.send();
    showQuote(quote);
}

$(document).ready(function(){
    showQuote(quote);
    $("#get-quote-btn").on("click", updateQuote);
    $("#tweet-btn").on("click touchstart", function () {
        var url = "https://twitter.com/intent/tweet?" + "text=" + encodeURIComponent('"') + encodeURIComponent(quote.quote) + encodeURIComponent('"') + encodeURIComponent("\n") + encodeURIComponent(quote.author);
        window.open(url, '_blank');
     });
});
