const canvas = document.getElementByID('canvas')
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//load images
const images = {};
images.player = new Image();
images.player.src = 'shadow.png';

const playerWidth = '529';
const playerHeight = '720';
let playerFrameX = 1;
let playerFrameY = 1;
let playerX = 0;
let playerY = 0;
const playerSpeed = 6;

function drawSprite(img, sX, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sW, sH, dX, dY, dW, dH);
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawSprite(images.player, playerWidth * playerFrameX, playerHeight * playerFrameY, playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight);
}

window.onload = setInterval(animate, 1000/30);
