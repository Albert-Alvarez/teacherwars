(function(){

    var json = $.getJSON("/star-wars-phrases.json", function(json) {
        var arrayRandom = Math.floor(Math.random() * json.length);
        $('.phrase q').text(json[arrayRandom].phrase);
        $('.phrase-attribution').text(json[arrayRandom].author + ', ' + json[arrayRandom].movie);  
    });
}());
