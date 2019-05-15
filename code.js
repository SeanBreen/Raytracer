var center = [300,370];
var rayLength = 300;
var drawWalls = true;
var drawing = false;
var drawingLine = [];

var lines = [];

function generateLines(noLines) {
  for(i=0;i<noLines;i++) {
    lines[lines.length] = [[Math.floor(Math.random() * width) + 1, Math.floor(Math.random() * canvas.height) + 1 ], [Math.floor(Math.random() * width) + 1, Math.floor(Math.random() * canvas.height) + 1 ]];
  }
}

//generateLines(5);

function appendCoord(x,y){
  lines[lines.length] = [drawingLine,[x,y]];
}

function updateCenter() {
  center = mouse;
}

function moveLines() {
  for(i=0;i<lines.length;i++) {
    lines[i][0][1]-=1;
    lines[i][1][1]-=1;
  }
}
