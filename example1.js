var vis = d3.select('#graph').append('svg');

vis.text("Hello World");
console.log(vis);
vis.select('#graph');
console.log(vis);

vis.attr("width", 800);
vis.attr("height", 600);

 var nodes = [{x: 10, y: 50},
              {x: 50, y: 80},
              {x: 90, y: 120}];

 var node = vis.selectAll("circle.node")
    .data(nodes)
    .enter().append("g")
    .attr("class", "node")

 node.append("svg:circle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", "10px")
    .attr("fill", "#087");


 vis.selectAll("circle.nodes")
    .data(nodes)
    .enter()
    .append("svg:circle")
    .attr("cx", function(d) { return d.x; })
 .attr("cy", function(d) { return d.y; })

var links = [
  {source: nodes[0], target: nodes[1]},
  {source: nodes[2], target: nodes[1]}
]

vis.selectAll(".line")
   .data(links)
   .enter()
   .append("line")
   .attr("x1", function(d) { return d.source.x })
   .attr("y1", function(d) { return d.source.y })
   .attr("x2", function(d) { return d.target.x })
   .attr("y2", function(d) { return d.target.y })
   .style("stroke", "rgb(6,120,155)");