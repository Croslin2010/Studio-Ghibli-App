var infoPromise=d3.json("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe")

infoPromise.then(
        function(info)
        {
            console.log("info", info)
            d3.select("#header").text ("Avaliable Movies:");
            displayTitle(info);
            displayMovieInfo(info);
            
            
        },
        function(error)
        {
            console.log("none", error)
            d3.select("#header").text("No Current Movies");
        })

var displayTitle=function(movie)
    {
        var box=d3.select('#clickerBox')
            box.append("div")
            .text("Title: " + movie.title);
    }

var displayMovieInfo=function(MovieInfo)
{
    var box=d3.select('#IDInfoBox')
        box.append("div")
        .text("ID: "+ MovieInfo.id)
}