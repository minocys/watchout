//Your code here

//create random coordinates for enemies

var enemies = 40;
var populateEnemies = function(enemies){
  var coordinates = [];//an array of objects with x:y key/value
  for(var i = 0; i < enemies; i++){
    var x = Math.floor(Math.random()*(window.innerWidth-100));
    var y = Math.floor(Math.random()*(window.innerHeight-100));
    var obj = {'x':x, 'y':y};
    coordinates.push(obj);
  }
  return coordinates;
}

var gameBoard = d3.select('body')
                .append('svg')
                .classed('board', true);

//create enemy
gameBoard.selectAll('svg')
        .data(populateEnemies(enemies)) //storage needs to hold an object of all enemies to appear on board
        .enter()
        .append('svg')
        .attr({
          x: function(d){return Number(d.x)},
          y: function(d){return Number(d.y)}
        })
        .append('circle')
        .attr('cx', 20)
        .attr('cy', 20)
        .attr('r', 20)
        .style('fill', 'purple');

//populateEnemies(50);

// var movement = function
// svg.selectAll('.assteroid')
// .transition()
// .attr('x', x)
// .attr('y', y);