var tweets = [];
var langs = [];
var tags = [];
var users = [];
var usersArray = [];
var au = require('array-unique');
var _ = require('lodash');
        function count(arr) { 
            var o = {}, i;
            for (i = 0; i < arr.length; ++i) {
                if (o[arr[i]]) ++o[arr[i]];
                else o[arr[i]] = 1;
            }
            return o;
        }
        
        function countData(arr_in) { 
            var o = count(arr_in),
                arr = [], i;
            for (i in o) arr.push({key: i, y: o[i]}); 
            arr.sort(function (a, b) {
                return a.weight < b.weight;
            });
            return arr;
        }
        

d3.json("../tweets.json", function (error, jsonData) {
    if(error){
        console.warn(error);
    }else{
        var response;
        for(var i = 0; i<jsonData.length; i++){
             tweets.push(jsonData[i].text);
             langs.push(jsonData[i].lang);
             users.push(jsonData[i].user.id);
             response = jsonData[i].entities.hashtags;
             for (var j = 0; j < response.length; j++) {
                tags.push(response[j].text);
            }
         }
         
        for(var o in jsonData){
            usersArray.push({key: jsonData[o].user.name, y: jsonData[o].user.statuses_count});        
        }
        var userData = _.uniqWith(usersArray, _.isEqual); 
        var TopLangs = [];
        var TopTags = [];
        var TopUsers = [];
        var tagData = countData(tags);
        var langData = countData(langs);
        var sortedTagData = tagData.sort(function (a,b) {
            return parseInt(b.y) - parseInt(a.y);
         });
        var sortedLangData = langData.sort(function (a,b) {
            return parseInt(b.y) - parseInt(a.y);
         });
        var sortedUserData=userData.sort(function (a,b) {
            return b.y - a.y;
        });
        for(var k = 0; k < 5; k++){
            TopTags.push(sortedTagData[k]); 
            TopLangs.push(sortedLangData[k]); 
            TopUsers.push(sortedUserData[k]);     
        }
        var SumData = [
        {
            key: "Summary",
            values: [
                {
                    "label" : "Tweets" ,
                    "value" : au(tweets).length
                } ,
                {
                    "label" : "Tags" ,
                    "value" : au(tags).length
                } ,
                {
                    "label" : "Users" ,
                    "value" : au(users).length
                } ,
                {
                    "label" : "Languages" ,
                    "value" : au(langs).length
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
                .datum(TopTags)
                .transition().duration(1200)
                .attr('width', width)
                .attr('height', height)
                .call(chart2);
        return chart2;
        });
        
        nv.addGraph(function() {
            var chart3 = nv.models.pieChart()
                .x(function(d) { return d.key })
                .y(function(d) { return d.y })
                .width(width)
                .height(height)
                .donut(true);
                
                chart3.valueFormat(d3.format('d'));
                chart3.legend.margin({top: 20, right: 0, left: -100, bottom: 0})
            d3.select("#chart3")
                .datum(TopLangs)
                .transition().duration(1200)
                .attr('width', width)
                .attr('height', height)
                .call(chart3);
        return chart3;
        });
        
         nv.addGraph(function() {
            var chart4 = nv.models.pieChart()
                .x(function(d) { return d.key })
                .y(function(d) { return d.y })
                .width(width)
                .height(height)
                .donut(true);
                
                chart4.valueFormat(d3.format('d'));
                chart4.legend.margin({top: 20, right: 0, left: -5, bottom: 0})
            d3.select("#chart4")
                .datum(TopUsers)
                .transition().duration(1200)
                .attr('width', width)
                .attr('height', height)
                .call(chart4);
        return chart4;
        });
        
        var UniqTweets = au(tweets);
        d3.select('#tab-content2')
            .selectAll('p')
            .data(UniqTweets)
            .enter()
            .append('p')
            .text(function (d) {
                return d;
            })
    }
});
