document.getElementById("get-quote-btn").onclick = function (){
    var path = "https://talaikis.com/api/quotes/random/";
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.status == 200 && request.readyState == 4){
            console.log("Parsing");
            var response = JSON.parse(this.responseText);
            var quote = response.quote;
            console.log(quote);
            var author = response["author"];
            document.getElementById("quote").innerHTML = quote;
            document.getElementById("author").innerHtml = author;
        }
    };
    request.open("GET", path);
    request.send();
};