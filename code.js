var infoPromise=d3.json("https://ghibliapi.herokuapp.com/films")
infoPromise.then(
        function(info)
        {
            d3.select("#header").text ("Welcome to Movie Explorer");
            console.log("info", info)
            displayTitles(info)
           
           
            
        },
        function(error)
        {
            d3.select("#header").text("No Current Movies");
        })

var displayTitles = function(info)
{

   d3.select("#clickerBox")
    .selectAll("ul")
    .data(info)
    .enter()
    .append("li")
    .text(function(d)
        {
            return d.title
        })
    .on("click", function(d){
           d3.selectAll("#IDInfoBox *")
           .remove()
            return displayInfo(d)
        })
 }


var displayInfo = function(movie)
  {
   var box =d3.select("#IDInfoBox")
      box.append("p")
      .text("Description: " +movie.description)
      box.append("p")
      .text("Director:"+movie.director)
      box.append("p")
      .text("Producer:" +movie.producer)
      box.append("p")
      .text("Release Date:" +movie.release_date)
      box.append("p")
      .text("Rotten Tomatoes Score: " +movie.rt_score)
  }

