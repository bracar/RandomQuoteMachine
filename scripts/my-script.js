var quote = {};

document.getElementById("get-quote-btn").onclick = function (){
    var path = "https://talaikis.com/api/quotes/random/";
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.status == 200 && request.readyState == 4){
            console.log("Parsing");
            var response = JSON.parse(this.responseText);
            quote.text = response.quote;
        //    console.log(quote);
            quote.author = response.author;
            document.getElementById("quote").innerHTML = quote.text;
       //     console.log(author);
            document.getElementById("author").innerText = quote.author;
        }
    };
    request.open("GET", path);
    request.send();
};

document.getElementById("tweet-btn").onclick = function () {
  var url = "https://twitter.com/intent/tweet?" + "text=" + encodeURIComponent(quote.text) + encodeURIComponent("\n") + encodeURIComponent(quote.author);
  window.open(url);
}