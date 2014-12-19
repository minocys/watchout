// start slingin' some d3 here.

var svg = d3.select('body').append('svg')
          .classed('board', true);

svg.append('svg')
  .append('circle')
  .attr('cx', 30)
  .attr('cy', 30)
  .attr('r', 30)
  .style('fill', 'purple')
  .classed('assteroid', true);