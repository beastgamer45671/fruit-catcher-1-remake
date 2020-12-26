var database;
var back_img;
var gameState =0;
var playerCount = 0;
var score = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var fruit1, fruit2, fruit3, fruit4, fruit5;
var player1_img, player2_img;


function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  player1_img = loadImage("images/basket2.png");
  player2_img = loadImage("images/basket2.png");
  
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  if(playerCount = 2){
    gameState = 1;
  }
  
}

function draw() {
  background(back_img);
  //players.x = mouse.x

  if(fruit1.isTouching(player1) || fruit1.isTouching(player2)){
  fruit1.destroy;
  }
  if(fruit2.isTouching(player1) || fruit2.isTouching(player2)){
  fruit2.destroy;
  }
  if(fruit3.isTouching(player1) || fruit3.isTouching(player2)){
  fruit3.destroy;
  }
  if(fruit4.isTouching(player1) || fruit3.isTouching(player2)){
  fruit4.destroy;
  }
  if(fruit5.isTouching(player1) || fruit3.isTouching(player2)){
  fruit5.destroy;
  }

  if(fruit1.isTouching(player1)){
    fruit1.destroy;
    player1.score = player1.score + 1;
  }
  if(fruit1.isTouching(player2)){
    fruit1.destroy;
    player2.score = player2.score + 1;
  }


  if(fruit2.isTouching(player1)){
    fruit2.destroy;
    player1.score = player1.score + 1;
  }
  if(fruit2.isTouching(player2)){
    fruit2.destroy;
    player2.score = player2.score + 1;
  }


  if(fruit3.isTouching(player1)){
    fruit3.destroy;
    player1.score = player1.score + 1;
  }
  if(fruit3.isTouching(player2)){
    fruit3.destroy;
    player2.score = player2.score + 1;
  }


  if(fruit4.isTouching(player1)){
    fruit4.destroy;
    player1.score = player1.score + 1;
  }
  if(fruit4.isTouching(player2)){
    fruit1.destroy;
    player2.score = player2.score + 1;
  }


  if(fruit5.isTouching(player1)){
    fruit5.destroy;
    player1.score = player1.score + 1;
  }
  if(fruit5.isTouching(player2)){
    fruit5.destroy;
    player2.score = player2.score + 1;
  }

  if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
   fruit1.display();
   fruit1.score();

   fruit2.display();
   fruit2.score();

   fruit3.display();
   fruit3.score();

   fruit4.display();
   fruit4.score();

   fruit5.display();
   fruit5.score();

   player1.display();
   
   player2.display();
}