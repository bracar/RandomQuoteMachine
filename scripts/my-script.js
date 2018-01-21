function updateQuote(){
    var path = "https://talaikis.com/api/quotes/random/";
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.status == 200 && request.readyState == 4){
            var quote = JSON.parse(this.quote);
            var author = JSON.parse(this.author);
            document.getElementById("quote").innerHTML = quote;
        }
    };
    request.open("GET", path);
}
document.getElementById("get-quote-btn").onclick = updateQuote;