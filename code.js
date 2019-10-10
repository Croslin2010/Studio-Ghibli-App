var infoPromise=d3.json("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe")

infoPromise.then(
        function(info)
        {
            console.log("info", info)
            d3.select("#header").text ("Avaliable Movies:");
        },
        function(error)
        {
            console.log("none", error)
            d3.select("#header").text("No Current Movies");
        })

var displayStuff=function(movie)
    {
        var box=d3.select('#clickerBox')
            box.append("div")
            .text("Title: " + movie.title);
    }
displayStuff(movie);