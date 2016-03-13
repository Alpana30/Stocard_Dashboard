var div = d3.select('body')
                .append('div')
                .attr("class", "tip")
                .style("opacity", 0);	

var id_name = ' ';
var data_value = [];
  
d3.select('#tweets')
        .data([10])
        .on('mouseover', function (d) {	
             div.style('opacity', 1);   
             div.html("Total: " + d)
                .style("position", "relative")	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY) + "px");	
        })
        .on("mouseout", function(d) {		
            div.style("opacity", 0);	
        });
        
d3.select('#tags')
    .data([20])
    .on('mouseover', function (d) {	
             div.style('opacity', 1);   
             div.html("Total: " + d)
                .style("position", "relative")	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY) + "px");	
    })
    .on("mouseout", function(d) {		
            div.style("opacity", 0);	
     });
     
d3.select('#users')
    .data([30])
    .on('mouseover', function (d) {	
             div.style('opacity', 1);   
             div.html("Total: " + d)
                .style("position", "relative")	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY) + "px");	
    })
    .on("mouseout", function(d) {		
            div.style("opacity", 0);	
    });

d3.select('#langs')
    .data([40])
    .on('mouseover', function (d) {	
             div.style('opacity', 1);   
             div.html("Total: " + d)
                .style("position", "relative")	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY) + "px");	
    })
    .on("mouseout", function(d) {		
            div.style("opacity", 0);	
    });