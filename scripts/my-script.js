var quote = {};
var updateQuote = function (){
    var path = "https://talaikis.com/api/quotes/random/";
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.status == 200 && request.readyState == 4){
            console.log("Parsing");
            var response = JSON.parse(this.responseText);
            quote.text = response.quote;
        //    console.log(quote);
            quote.author = response.author;
            document.getElementById("quote").innerHTML ='"'+ quote.text + '"';
       //     console.log(author);
            document.getElementById("author").innerText = quote.author;
        }
    };
    request.open("GET", path);
    request.send();
};

updateQuote();

document.getElementById("get-quote-btn").onclick = updateQuote;

$(document).ready(function(){
    $("#tweet-btn").on("click touchstart", function () {
        var url = "https://twitter.com/intent/tweet?" + "text=" + encodeURIComponent('"') + encodeURIComponent(quote.text) + encodeURIComponent('"') + encodeURIComponent("\n") + encodeURIComponent(quote.author);
        window.open(url, '_blank');
     });
});
