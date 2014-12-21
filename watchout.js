//Your code here
var collisionCount = 0;
var score = 0;
var highScore = d3.select('.high').select('span');
var collisions = d3.select('.collisions').select('span');
var currentScore = d3.select('.current').select('span');
var enemies = 25;

//utility to generate array of objects with coordinates as values
var makeCoords = function(number){
  var coordinates = [];//an array of objects with x:y key/value
  for(var i = 0; i < number; i++){
    var x = Math.floor(Math.random()*(window.innerWidth-20));
    var y = Math.floor(Math.random()*(window.innerHeight-20));
    var obj = {'x':x, 'y':y};
    coordinates.push(obj);
  }
  return coordinates;
};

//create game board
var gameBoard = d3.select('body')
                .append('svg')
                .classed('gameboard', true);

//create enemy
gameBoard.selectAll('svg')
        .data(makeCoords(enemies)) //storage needs to hold an object of all enemies to appear on board
        .enter()
        .append('svg:image')
        .attr('xlink:href', 'shuriken.png')
        .attr('height', 40)
        .attr('width', 40)
        .classed('enemy', true)
        .attr({
          x: function(d){return Number(d.x)},
          y: function(d){return Number(d.y)}
        })
        .on('mouseover', function(){
          collisionCount++;
          collisions.text(collisionCount);
          if( score > highScore.text() ){
            highScore.text(score);
          }
          score = 0;
        });

//Enemy movement - interval = time between each move, duration = speed of objects
setInterval(function(){
  gameBoard.selectAll('.enemy')
        .data(makeCoords(enemies))
        .transition()
        .duration(1850)
        .attr({
          x: function(d){return Number(d.x)},
          y: function(d){return Number(d.y)}
        });
}, 1000);

//create character/player
var player = gameBoard.append('svg:ellipse')
        .classed('player', true)
        .attr('cx', 20)
        .attr('cy', 20)
        .attr('rx', 20)
        .attr('ry', 10)
        .style('fill', 'blue');

//attach player object to player mouse
gameBoard.on('mousemove', function(d){
    var x = d3.mouse(this)[0];
    var y = d3.mouse(this)[1];
    player.attr("cx", x)
          .attr("cy", y);
});

//score keeper
d3.timer( function() {
  score++;
  currentScore.text(score);
});



