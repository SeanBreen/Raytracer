function getEndPoint(a,b) {
  //passed in in format [[x1,y1],[x2,y2]] for a and b
  let slope1 = getSlope(a[0][0],a[0][1],a[1][0],a[1][1]);
  let slope2 = getSlope(b[0][0],b[0][1],b[1][0],b[1][1]);

  let yI1 = getYIntercept(a[0][0], a[0][1], slope1);
  let yI2 = getYIntercept(b[0][0], b[0][1], slope2);

  let interceptPoint = getInterceptPoint(slope1,yI1,slope2,yI2);
  return interceptPoint;
}

//m
function getSlope(x1,y1,x2,y2) {
  let m = (y2 - y1)/(x2 - x1);
  return m;
}

//b
function getYIntercept(x,y,m) {
  //y = mx+b
  //b = (mx-y)*-1
  let b = ((m*x)-y)*-1;
  return b;
}

function getInterceptPoint(m1,b1,m2,b2) {
  //mx+b = mx+b
  /*
  side a = mx+b
  side b = mx+b

  get x's on left
  m1x = m2x+b1 -b2
  m1x - m2x = b1-b2

  combine like terms
  m1 - m2
  get final answer
  mx = b
  */

  let m3 = m1-m2;
  let b3 = b1-b2;
  let x = (b3/m3)*-1;

  //y = mx+b
  //y = m1*x+b1

  let y = (m1*x)+b1;
  x+=0.000000000000001;
  y+=0.000000000000001;

  return [x,y];

}
