function getRayEnd(a,rayLength,angle) {
  //(x2,y2)=(x1+l⋅cos(a),y1+l⋅sin(a))

  let x2 = (a[0] + rayLength * Math.cos(angle));
  let y2 = (a[1] + rayLength * Math.sin(angle));
  return [x2,y2];
}

function checkWithinBounds(a,b) {
  //passed in in format a[,], b[[,],[,]]
  //within X axis bounds
  //assumes b[0][0] is higher up than b[1][0]
  if (a[0] >= b[0][0] && a[0] <= b[1][0]) {
    //within Y bounds
    //assumes b[0][1] is higher up than b[1][1]
    if (a[1] >= b[0][1] && a[1] <= b[1][1]) {
      return true;
    }
  }

  //assumes b[0][0] is higher up than b[1][0]
  if (a[0] >= b[0][0] && a[0] <= b[1][0]) {
    //within Y bounds
    //assumes b[1][1] is higher up than b[0][1]
    if (a[1] >= b[1][1] && a[1] <= b[0][1]) {
      return true;
    }
  }

  //assumes b[1][0] is higher up than b[0][0]
  if (a[0] >= b[1][0] && a[0] <= b[0][0]) {
    //within Y bounds
    //assumes b[0][0] is higher up than b[1][0]
    if (a[1] >= b[0][1] && a[1] <= b[1][1]) {
      return true;
    }
  }

  //assumes b[1][0] is higher up than b[0][0]
  if (a[0] >= b[1][0] && a[0] <= b[0][0]) {
    //within Y bounds
    //assumes b[1][1] is higher up than b[0][1]
    if (a[1] >= b[1][1] && a[1] <= b[0][1]) {
      return true;
    }
  }
}

function pythagorus(x1,y1,x2,y2) {
    let w = Math.abs(x1-x2);
    let h = Math.abs(y1-y2);
    let hypotenuse = Math.sqrt(Math.pow(w,2) + Math.pow(h,2));
    return hypotenuse
}

function checkRayLength(x1,y1,x2,y2) {
  hypotenuse = pythagorus(x1,y1,x2,y2);
  if (hypotenuse <= rayLength) {
    return true;
  }
}
