var div = d3.select('body')
                .append('div')
                .attr("class", "tip")
                .style("opacity", 0);	

var theData = [
    {
        id_name: '#tweets',
        text_value: 'Tweets',
        data_value: 10
    },
    {
        id_name: '#tags',
        text_value: 'Tags',
        data_value: 20
    },
    {
        id_name: '#users',
        text_value: 'Users',
        data_value: 30
    },
    {
        id_name: '#langs',
        text_value: 'Languages',
        data_value: 40
    },
]

d3.select('nav')
       .selectAll('a')
       .data(theData)
       .enter()
       .append('a')
       .attr('id',function (d) {
           return d.id_name;
       })
       .text(function (d) {
           return d.text_value;
       })
       .on('mouseover', function (d) {	
             div.style('opacity', 1);   
             div.html("Total: " + d.data_value)
                .style("position", "relative")	
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY) + "px");	
        })
        .on("mouseout", function(d) {		
            div.style("opacity", 0);	
        });
