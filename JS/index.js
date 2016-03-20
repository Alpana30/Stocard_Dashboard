var SumData = [
        {
            key: "Summary",
            values: [
                {
                    "label" : "Tweets" ,
                    "value" : 46
                } ,
                {
                    "label" : "Tags" ,
                    "value" : 20
                } ,
                {
                    "label" : "Users" ,
                    "value" : 50
                } ,
                {
                    "label" : "Languages" ,
                    "value" : 10
                } 
            ]
        }
    ];
nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
            .x(function(d) { return d.label })
            .y(function(d) { return d.value })
            .showValues(true)
            .duration(250)
            ;
     chart.valueFormat(d3.format('d'));
     chart.yAxis.tickFormat(d3.format('d'));
     chart.yAxis.axisLabel("Total Count");
        d3.select('#tab-content1 svg')
            .datum(SumData)
            .call(chart);
        
        nv.utils.windowResize(chart.update);
        return chart;
    });
    
var TagsData = [
        {key: "Tag#1", y: 2},
        {key: "Tag#2", y: 1},
        {key: "Tag#3", y: 3},
        {key: "Tag#4", y: 4},
        {key: "Tag#5", y: 3},
];
var height = 500;
var width = 500;

nv.addGraph(function() {
        var chart2 = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.y })
            .width(width)
            .height(height);
            chart2.valueFormat(d3.format('d'));
            chart2.legend.margin({top: 20, right: 0, left: -45, bottom: 0})
        d3.select("#chart2")
            .datum(TagsData)
            .transition().duration(1200)
            .attr('width', width)
            .attr('height', height)
            .call(chart2);
        return chart2;
    });