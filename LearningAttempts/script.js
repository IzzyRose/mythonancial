// Declare our Variables as Global so we can use them anywhere in our code
// game: Holds the main game
// player: Holds player
var game;


var player;

window.onload = function(){
  //Starts and Intializes Phaser Game
  //new Phaser.Game( width(px) , height(px), renderer, parent, state)
  game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
    preload: preload,
    create: create,
    update: update,
    render: render
  });
}

//  Preload:
//  -1st Function Called
//  -Used to load images and other files into the game
function preload() {
  // This function enables cross origin asset loading
  // This is when you try to load assets from different domains
  game.load.crossOrigin = true;
    
    
    //Start our physics system, in this case the Arcade system
  //Arcade Physics is for high-speed collision only.
  //AABB means axis-aligned bounded rectangles;
  //it means you have objects without rotation, and you're only checking if the image (which is a rectangle) overlaps with another image.
  game.physics.startSystem(Phaser.Physics.ARCADE);
    
     //Set the bounds of the world seperate from the canvas size so we can scroll the screen
  //Updates the size of this world and sets World.x/y to the given values
  //The Camera bounds and Physics bounds (if set) are also updated to match the new World bounds.
  //setBounds(x, y, width, height)
  game.world.setBounds(0, 0, 2400, 900);
    
     // Setting Background Color
    game.stage.backgroundColor = '#2d2d2d';

}

//  Create:
//  -Called after preload
//  -Ran right after preload
//  -Create sprites that should be there when the game starts
//  -Loading in feature of world like physics and Color
function create() {


}

//  Update:
//  -Called during the core game loop
//  -Called 60 times per second while the game is running
//  -Place to take in player input
//  -Place to put in game logic
function update() {

}

//  Render:
//  -Post Rendering Effects go here
//  *Nearly all display objects in Phaser render automatically
//  -Used to add debug text
function render() {

}