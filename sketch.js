// tarot card images
let tarotCard = [];
let x = 0;
//dont show desc until click
let showText = false
let showText2 = false
let showText3 = false
//let showText2 = false
//let showText3 = false
//circles to cycle on delay during shuffle screen (left-right)
let leftDelay = 20;
let middleDelay = 10;
let rightDelay = 0;
//button state
let buttonState = true;
//the button will disappear when pressed
let press = false;
let press1 = false;
let button;
let button1;
let button2;
let button3;
let font;
let card = false;
let randomCard;
let time = 3;
let speed = 2;
let imageSizeX1 = 175;
let imageSizeY1 = 300;
let imageSizeX2 = 175;
let imageSizeY2 = 300;
let imageSizeX3 = 175;
let imageSizeY3 = 300;
let imageWidth = 800;
let revealToggle = true;
let meaning1;
let meaning2;
let meaning3;
let title;
let desc;
let title2;
let desc2;
let title3;
let desc3;


//to clear canvas
function changeButtonstate() {
  if (buttonState) {
    buttonState = false;
    console.log(buttonState);
  } else if (!buttonState) {
    buttonState = true;
    console.log(buttonState);
  }
}

function preload() {
  font1 = loadFont("FacultyGlyphic-Regular.ttf");
  firstBackground = loadImage("/assests2/firstBackground.png");

  secondBackground = loadImage("/assests2/LOADING.jpg");

  thirdBackground = loadImage("/assests2/thirdbackground.png")

  table = loadTable("tarot deck - Sheet1.csv", "csv", "header");
  // major arcana = 21 (1-21)

  // fool
  tarotCard[0] = loadImage("/assests1/m00.jpg");
  // magician
  tarotCard[1] = loadImage("/assests1/m01.jpg");
  // high priestess
  tarotCard[2] = loadImage("/assests1/m02.jpg");
  // empress
  tarotCard[3] = loadImage("/assests1/m03.jpg");
  // emperor
  tarotCard[4] = loadImage("/assests1/m04.jpg");
  // hierophant (priest)
  tarotCard[5] = loadImage("/assests1/m05.jpg");
  // lovers
  tarotCard[6] = loadImage("/assests1/m06.jpg");
  // chariot
  tarotCard[7] = loadImage("/assests1/m07.jpg");
  // strength
  tarotCard[8] = loadImage("/assests1/m08.jpg");
  // hermit
  tarotCard[9] = loadImage("/assests1/m09.jpg");
  // wheel of fortune
  tarotCard[10] = loadImage("/assests1/m10.jpg");
  // justice
  tarotCard[11] = loadImage("/assests1/m11.jpg");
  // hanged man
  tarotCard[12] = loadImage("/assests1/m12.jpg");
  // death
  tarotCard[13] = loadImage("/assests1/m13.jpg");
  // temperance
  tarotCard[14] = loadImage("/assests1/m14.jpg");
  // devil
  tarotCard[15] = loadImage("/assests1/m15.jpg");
  // lightning-struck tower
  tarotCard[16] = loadImage("/assests1/m16.jpg");
  // star
  tarotCard[17] = loadImage("/assests1/m17.jpg");
  // moon
  tarotCard[18] = loadImage("/assests1/m18.jpg");
  // sun
  tarotCard[19] = loadImage("/assests1/m19.jpg");
  // judegment
  tarotCard[20] = loadImage("/assests1/m20.jpg");
  // world
  tarotCard[21] = loadImage("/assests1/m21.jpg");

  // cups = 14 (22-35)
  tarotCard[22] = loadImage("/assests/c01.jpg");
  tarotCard[23] = loadImage("/assests/c02.jpg");
  tarotCard[24] = loadImage("/assests/c03.jpg");
  tarotCard[25] = loadImage("/assests/c04.jpg");
  tarotCard[26] = loadImage("/assests/c05.jpg");
  tarotCard[27] = loadImage("/assests/c06.jpg");
  tarotCard[28] = loadImage("/assests/c07.jpg");
  tarotCard[29] = loadImage("/assests/c08.jpg");
  tarotCard[30] = loadImage("/assests/c09.jpg");
  tarotCard[31] = loadImage("/assests/c10.jpg");
  tarotCard[32] = loadImage("/assests/c11.jpg");
  tarotCard[33] = loadImage("/assests/c12.jpg");
  tarotCard[34] = loadImage("/assests/c13.jpg");
  tarotCard[35] = loadImage("/assests/c14.jpg");

  // pentacles = 14 (36-49)
  tarotCard[36] = loadImage("/assests/p01.jpg");
  tarotCard[37] = loadImage("/assests/p02.jpg");
  tarotCard[38] = loadImage("p03.jpg");
  tarotCard[39] = loadImage("/assests/p04.jpg");
  tarotCard[40] = loadImage("/assests/p05.jpg");
  tarotCard[41] = loadImage("/assests/p06.jpg");
  tarotCard[42] = loadImage("/assests/p07.jpg");
  tarotCard[43] = loadImage("/assests/p08.jpg");
  tarotCard[44] = loadImage("/assests/p09.jpg");
  tarotCard[45] = loadImage("/assests/p10.jpg");
  tarotCard[46] = loadImage("/assests/p11.jpg");
  tarotCard[47] = loadImage("/assests/p12.jpg");
  tarotCard[48] = loadImage("/assests/p13.jpg");
  tarotCard[49] = loadImage("/assests/p14.jpg");

  // swords = 14 (50-62)
  tarotCard[50] = loadImage("/assests/s01.jpg");
  tarotCard[51] = loadImage("/assests/s02.jpg");
  tarotCard[52] = loadImage("/assests/s03.jpg");
  tarotCard[53] = loadImage("/assests/s04.jpg");
  tarotCard[54] = loadImage("/assests/s05.jpg");
  tarotCard[55] = loadImage("/assests/s06.jpg");
  tarotCard[56] = loadImage("/assests/s07.jpg");
  tarotCard[57] = loadImage("/assests/s08.jpg");
  tarotCard[58] = loadImage("/assests/s09.jpg");
  tarotCard[59] = loadImage("/assests/s10.jpg");
  tarotCard[60] = loadImage("/assests/s11.jpg");
  tarotCard[61] = loadImage("/assests/s12.jpg");
  tarotCard[62] = loadImage("/assests/s13.jpg");
  tarotCard[63] = loadImage("/assests/s14.jpg");

  // wands = 14 (64-77)
  tarotCard[64] = loadImage("/assests/w01.jpg");
  tarotCard[65] = loadImage("/assests/w02.jpg");
  tarotCard[66] = loadImage("w03.jpg");
  tarotCard[67] = loadImage("/assests/w04.jpg");
  tarotCard[68] = loadImage("/assests/w05.jpg");
  tarotCard[69] = loadImage("/assests/w06.jpg");
  tarotCard[70] = loadImage("/assests/w07.jpg");
  tarotCard[71] = loadImage("/assests/w08.jpg");
  tarotCard[72] = loadImage("w09.jpg");
  tarotCard[73] = loadImage("/assests/w10.jpg");
  tarotCard[74] = loadImage("/assests/w11.jpg");
  tarotCard[75] = loadImage("/assests/w12.jpg");
  tarotCard[76] = loadImage("/assests/w13.jpg");
  tarotCard[77] = loadImage("/assests/w14.jpg");

  font = loadFont("FleurDeLeah-Regular.ttf");
  cardBack = loadImage("/assests2/cardback.png")
  movingCard = loadImage("/assests2/movingCard.png")
  dot = loadImage("/assests2/dot.png")
}

function setup() {
  frameRate(30);
  var canvas = createCanvas(800, 400);
  canvas.parent("sketch-holder");

  //ready button
  button = createButton("Ready");
  button.parent("button-holder");
  button.mousePressed(pressReadyButton);

  //stop button
  button1 = createButton("Stop");
  button1.parent("button-holder");
  button1.mousePressed(pressStopButton);
  button1.hide();

  button2 = createButton("Reveal");
  button2.parent("button-holder");
  button2.hide();
  button2.mousePressed(pressRevealButton);
  
  button3 = createButton("Try Again");
  button3.parent("button-holder");
  button3.hide();
  button3.mousePressed(pressHomeButton);
}

function draw() {
  background(firstBackground);
  //when ready button is pressed it disappears
  if (press) {
    button.hide();
    drawReady();
  }
  //when stop button is pressed it disappears and deals the deck
  if (press1) {
    button1.hide();
    if (card) {
      drawDeal();
    }
    //the three tarot cards are drawn
    background(thirdBackground);
    hoverImage();
    image(tarotCard[randomCard], 50, 50, imageSizeX1, imageSizeY1);
    image(tarotCard[randomCard2], 312.5, 50, imageSizeX2, imageSizeY2);
    image(tarotCard[randomCard3], 575, 50, imageSizeX3, imageSizeY3);
    
    if (revealToggle) {
      //left card
      image(cardBack,45,45,imageSizeX1+12,imageSizeY1+12)
      
      //middle card
      image(cardBack,305,45,imageSizeX2+12,imageSizeY2+12)
      
      //right card
      image(cardBack,570,45,imageSizeX3+12,imageSizeY3+12)
      
    }
  }
  
  if (!revealToggle) {
    if (showText) {
      textFont(font1)
      fill("#1b192e");
      rect(50,50,190,330);
      fill(255); 
      textSize(15); 
      text(desc, 65, 75, 170,300);
    } else if (showText2) {
      fill("#1b192e");
      rect(310,50,190,330);
     fill(255); 
      textSize(15); 
      text(desc2,320,75, 170, 300);
    } else if (showText3) {
      fill("#1b192e");
      rect(570,50,190,330);
     fill(255); 
      textSize(15); 
      text(desc3, 580,75, 170, 300);
    }
  }
  
}

function pressReadyButton() {
  press = true;

}

//SHUFFLING SCREEN
function drawReady() {
 for (let i = 0; i < 50; i++) {
   let imageX = x + (i * imageWidth);
   image(firstBackground,imageX,0,imageWidth,400);
   image(firstBackground, imageX-800,0,imageWidth, 400);
   if (imageX + imageWidth <= 0) {
      x = x + imageWidth;
 }
 }
  x += speed;
  
  if (x >= imageWidth) {
    x = 0;
  }
  
  button1.show();
 
  //left circle
  if ((frameCount + leftDelay) % 60 < 30) {
    strokeWeight(0);
    fill(255);
    image(dot,width / 2 - 200, 200, 50,50);
  }
  //middle circle
  if ((frameCount + middleDelay) % 60 < 30) {
    strokeWeight(0);
    fill(255);
    image(dot,width / 2, 200, 50,50);
  }
  //right circle
  if ((frameCount + rightDelay) % 60 < 30) {
    strokeWeight(0);
    fill(255);
    image(dot,width / 2 + 200, 200, 50,50);
  }
  
}


function pressStopButton() {
  press1 = true;
  card = true;
}

//when stop button is pressed a random deal
function drawDeal() {
  randomCard = int(random(tarotCard.length));
  randomCard2 = int(random(tarotCard.length));
  randomCard3 = int(random(tarotCard.length));
  
  // add random selection of card meaning here
  //card 1
  meaning1 = int(random(1,4));
  
  desc = table.get(randomCard - 1, meaning1);
  title = table.get(randomCard - 1, 0);
  
  console.log(title);
  console.log(desc);
  console.log(randomCard);
  console.log(meaning1);
  
//card 2 
 meaning2 = int(random(1,4));
  
 desc2 = table.get(randomCard2 - 1, meaning2);
 title2 = table.get(randomCard2 - 1, 0);
  
  console.log(title2);
  console.log(desc2);
  
  meaning3 = int(random(1,4));
  
  desc3 = table.get(randomCard3 - 1, meaning3);
  title3 = table.get(randomCard3 - 1, 0);
  
  console.log(title3);
  console.log(desc3);

  card = false;
  //if (frameCount % 60 == 0 && time > 0) {
  //time--;
  // } else if (time == 0){
  button2.show();
  //time = 1;
  //  }
}

function hoverImage() {
  if (mouseY > 50 && mouseY < 350) {
    if (mouseX > 50 && mouseX < 225) {
      imageSizeX1 = imageSizeX1 + 3.5;
      imageSizeY1 = imageSizeY1 + 6;
      if (imageSizeX1 >= 183.75) {
        imageSizeX1 = 183.75;
        imageSizeY1 = 315;
      }
      if (imageSizeX2 > 175) {
        imageSizeX2 = imageSizeX2 - 3.5;
        imageSizeY2 = imageSizeY2 - 6;
      }
      if (imageSizeX3 > 175) {
        imageSizeX3 = imageSizeX3 - 3.5;
        imageSizeY3 = imageSizeY3 - 6;
      }
    } else if (mouseX > 310 && mouseX < 500) {
      imageSizeX2 = imageSizeX2 + 3.5;
      imageSizeY2 = imageSizeY2 + 6;
      if (imageSizeX2 >= 183.75) {
        imageSizeX2 = 183.75;
        imageSizeY2 = 315;
      }
      if (imageSizeX1 > 175) {
        imageSizeX1 = imageSizeX1 - 3.5;
        imageSizeY1 = imageSizeY1 - 6;
      }
      if (imageSizeX3 > 175) {
        imageSizeX3 = imageSizeX3 - 3.5;
        imageSizeY3 = imageSizeY3 - 6;
      }
    } else if (mouseX > 575 && mouseX < 790) {
      imageSizeX3 = imageSizeX3 + 3.5;
      imageSizeY3 = imageSizeY3 + 6;
      if (imageSizeX3 >= 183.75) {
        imageSizeX3 = 183.75;
        imageSizeY3 = 315;
      }
      if (imageSizeX1 > 175) {
        imageSizeX1 = imageSizeX1 - 1.75;
        imageSizeY1 = imageSizeY1 - 3;
      }
      if (imageSizeX2 > 175) {
        imageSizeX2 = imageSizeX2 - 1.75;
        imageSizeY2 = imageSizeY2 - 3;
      }
    } else {
      if (imageSizeX1 > 175) {
        imageSizeX1 = imageSizeX1 - 1.75;
        imageSizeY1 = imageSizeY1 - 3;
      }
      if (imageSizeX2 > 175) {
        imageSizeX2 = imageSizeX2 - 1.75;
        imageSizeY2 = imageSizeY2 - 3;
      }
      if (imageSizeX3 > 175) {
        imageSizeX3 = imageSizeX3 - 1.75;
        imageSizeY3 = imageSizeY3 - 3;
      }
    }
    

    // min 175x and 300y
    // max 183.75 and 315
  }
}

function mousePressed(){
   if (!revealToggle) {
   if (mouseY > 50 && mouseY < 350) {
    if (mouseX > 50 && mouseX < 225) {
      showText = true;
      showText2 = false;
      showText3 = false;
    } else if (mouseX > 310 && mouseX < 500) {
      showText2 = true;
      showText = false;
      showText3 = false;
    } else if (mouseX > 575 && mouseX < 790) {
      showText3 = true;
      showText = false;
      showText2 = false;
    }
  }
}
}

function pressRevealButton() {
  if (revealToggle) {
    revealToggle = false;
    
    button2.hide();
    button3.show();
    
    }
  console.log(revealToggle);
}

function pressHomeButton(){
   background(firstBackground);
  //when ready button is pressed it disappears
  button.show();
  press = false;
  press1 = false;
  revealToggle = true;
  showText1 = false;
  showText2 = false;
  showText3 = false;
  button3.hide();
  
}

  
