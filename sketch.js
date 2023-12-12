var asteroidImage;
var metaroidImage;
var fuelImage;
var ship1Image;
var ship2Image;
var BackgroundImage;
var titleImage;
var trackImage;
var ship1;
var ship2;
var Background;

function preload() {
    asteroidImage = loadImage("./assets/asteroid.png");
    metaroidImage = loadImage("./assets/metaroid.png");
    fuelImage = loadImage("./assets/fuelImage.png");
    BackgroundImage = loadImage("./assets/spaceBackground.jpg");
    titleImage = loadImage("./assets/title.png");
    trackImage = loadImage("./assets/track.jpeg");
    ship1Image = loadImage("./assets/ship1.png");
    ship2Image = loadImage("./assets/ship2.png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    database = firebase.database();

    Background = createSprite(200, 200);
    Background.addImage(BackgroundImage);

    ship1 = createSprite(1920, 950);
    ship1.addImage(ship1Image);

    ship2 = createSprite(2400, 950);
    ship2.addImage(ship2Image);
}

function draw() {
    background(Background);

    drawSprites();
}



