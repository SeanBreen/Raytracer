var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

var mouse = [0,0];

canvas.addEventListener("mousedown", function(ev) {
  drawingLine = [ev.clientX,ev.clientY];
  drawing = true;
});

canvas.addEventListener("mouseup", function(ev) {
  appendCoord(ev.clientX,ev.clientY);
  drawingLine = [0,0];
  drawing = false;
});

canvas.addEventListener("mousemove", function(ev) {
  mouse = [ev.clientX,ev.clientY];
});

function clearScreen() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0,0,width,height);
}

function drawWorld() {
  for(i=0;i<lines.length;i++) {
    var line = lines[i];
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(line[0][0], line[0][1]);
    ctx.lineTo(line[1][0], line[1][1]);
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.arc(center[0][0], center[0][1], 5, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(center[0][0], center[0][1]);
  ctx.lineTo(center[1][0], center[1][1]);
  ctx.stroke();

}

function drawDrawingLine() {
  if (drawing) {
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(drawingLine[0],drawingLine[1]);
    ctx.lineTo(mouse[0],mouse[1]);
    ctx.stroke();
  }
}

function drawRays() {
  for (i=0;i<360;i+=1) {
    rayEndPoint = getRayEnd(center, rayLength, i);
    a = [center,rayEndPoint];
    ctx.beginPath();
    ctx.moveTo(a[0][0], a[0][1]);
    var rayQueue = [0,0,100000000];
    for (j=0;j<lines.length;j++) {
      var hitPoints = 0;
      var line = lines[j];
      interceptPoint = getEndPoint(a,line);

      if (interceptPoint) {

        //check the line is within the bounds, check the ray is long enough to actually reach, check the ray is on the right side of the intersection
        if (checkWithinBounds(interceptPoint,line) && checkRayLength(a[0][0], a[0][1], interceptPoint[0], interceptPoint[1]) && checkRayLength(rayEndPoint[0], rayEndPoint[1], interceptPoint[0], interceptPoint[1])){
          var tLength = pythagorus(mouse[0], mouse[1], interceptPoint[0], interceptPoint[1]);
          if (tLength < rayQueue[2]) {
            rayQueue = [interceptPoint[0], interceptPoint[1], tLength];
          }
        }
      }
    }
    if (rayQueue[0] == 0 && rayQueue[1] == 0) {
      rayQueue = [rayEndPoint[0], rayEndPoint[1]];
    }

    ctx.lineTo(rayQueue[0], rayQueue[1]);
    ctx.save();
    ctx.translate(mouse[0],mouse[1]);
    var gradStyle = ctx.createRadialGradient(0,0,0, 0,0,rayLength);
    gradStyle.addColorStop(0.04, "#555");
    gradStyle.addColorStop(0.9, "black");
    ctx.lineWidth = 5;
    ctx.strokeStyle = gradStyle;
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
    ctx.lineWidth = 1;

  }
}

function draw() {
  clearScreen();
  updateCenter();
  drawRays();
  drawWorld();
  drawDrawingLine();
}
