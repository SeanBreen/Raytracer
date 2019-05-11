function loop() {
  //moveLines();
  draw();
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
