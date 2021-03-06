var canvas, ctx, w, h; 
var xMonster = 10;
var yMonster = 10;
var monsterSpeed = 1;

window.onload = function init() {
    canvas = document.querySelector("#myCanvas");
  
    w = canvas.width; 
    h = canvas.height;  
  
    ctx = canvas.getContext('2d');
  
    mainLoop();
};

function mainLoop() {
  ctx.clearRect(0, 0, w, h);
  
  drawMyMonster(xMonster, yMonster);
  
  yMonster += monsterSpeed;
  
  if (((yMonster + 100)> w) || (yMonster < 0))  {
    monsterSpeed = -monsterSpeed;
  }
  
  requestAnimationFrame(mainLoop);
}

function drawMyMonster(x, y) {
    ctx.save();
  
    ctx.translate(x, y);
  
    ctx.strokeRect(0, 0, 100, 100);
  
    ctx.fillRect(20, 20, 10, 10);
    ctx.fillRect(65, 20, 10, 10);
  
    ctx.strokeRect(45, 40, 10, 40);
  
    ctx.strokeRect(35, 84, 30, 10);
  
    ctx.fillRect(38, 84, 10, 10);
    ctx.fillRect(52, 84, 10, 10);
  
    ctx.restore();
}