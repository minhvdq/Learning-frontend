// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const bd = document.querySelector('body');

//const width = (canvas.width = window.innerWidth);
//const height = (canvas.height = window.innerHeight);

const w = (canvas.width = window.innerWidth);
const h = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

const arr = [];
class Player{
  constructor(x, y, velx, vely, rad){
    
  }
}

// the ball object
class Ball{
  x;
  y;
  goX;
  goY;
  rad;
  col;
  constructor(x,y,goX,goY, rad, col){
    this.x = x;
    this.y = y;
    this.goX = goX;
    this.goY = goY;
    this.col = col;
    this.rad = rad;
  }
  changeCol(){
    const newCol = randomRGB();
    this.col = newCol;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
    ctx.fillStyle = this.col;
    ctx.fill();
  }
  checkV(){
    if(this.x + this.rad >= w){
      this.goX = 0 - Math.abs(this.goX);

    }
    if(this.x - this.rad <= 0){
      this.goX = Math.abs(this.goX);
    }
    if(this.y + this.rad >= h){
      this.goY = 0 - Math.abs(this.goY);

    }
    if(this.y - this.rad <= 0){
      this.goY = Math.abs(this.goY);
    }
  }
  
  randomMove(){
    this.checkV();
    this.x += this.goX;
    this.y += this.goY;
  }
}
function square(num){
  return num*num;
}


// the eater object
let sp= 5;
class Eater{
  constructor    (x,y){
    this.x = x;
    this.y = y;
  }
  move(a){
    if(a === "w"){
      this.y -= sp;
    }
    if(a === "s"){
      this.y += sp;
    }
    if(a === "a"){
      this.x -= sp;
    }
    if(a === "d"){
      this.x += sp;
    }
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,20,0,Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}
const player = new Eater(random(20, w-20), random(20, h-20));

//check if 2 balls hit
function collisionCheck(ball1, ball2){
  let resDis = ball1.rad + ball2.rad;
  let dis = Number(Math.sqrt(square(ball1.x - ball2.x) + square(ball1.y - ball2.y)));
  if(dis <= resDis){
    return true;

  }
  return false;
  
}
for(let i = 0; i <= 10; i++){
const objc = new Ball(
    random(50, w - 50),
    random(50, h - 50),
    random(15 , 20),
    random(5, 7),
    random(20, 50),
    randomRGB()
  );
  arr.push(objc);
}
let check = true;
bd.addEventListener('keydown', (e) =>{
  player.move(e.key);
});


function ballAuto(){
  ctx.clearRect(0, 0, w, h);
  //ctx.fillStyle = "black";
  let l = arr.length;
  for( let j = 0; j < l; j ++){
    for( let  i = j+1; i < l; i++){
      if(collisionCheck(arr[j], arr[i]) === true){
        arr[j].changeCol();
        arr[i].changeCol();
      }
    }
  }
  for(const objc of arr){
    player.draw();
    objc.draw();
    objc.randomMove();
  }
  requestAnimationFrame(ballAuto);
}
ballAuto();


