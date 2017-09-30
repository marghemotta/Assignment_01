function setup() {
  createCanvas(800, 600)
}

function draw() {

  background('#49c1b0');
  noStroke();

  //upper body
  //antenna
  fill('#ea4462')
  rect(246, 115, 9, 46, 0, 0, 0, 0);
  rect(238.5, 129, 24, 4, 0, 0, 0, 0);
  rect(238.5, 137, 24, 4, 0, 0, 0, 0);
  fill('#4d3740')
  ellipse(250, 112, 20, 20);
  fill('#fff')
  ellipse(248, 110, 7, 7);

  //ears
  fill('#ea4462')
  rect(191, 198, 9, 23, 0, 0, 0, 0);
  rect(300, 198, 9, 23, 0, 0, 0, 0);
  fill('#f9b341')
  arc(191, 209.5, 20, 20, HALF_PI, PI + HALF_PI);
  arc(309, 209.5, 20, 20, PI + HALF_PI, HALF_PI);

  //head
  fill('#ffe6a9')
  rect(200, 200, 100, 36, 0, 0, 0, 0);
  arc(250, 200, 100, 100, PI, 0);

  //eye
  fill('#fff')
  ellipse(250, 206, 39, 39);
  fill('#4d3740')
  ellipse(250, 206, 30, 30);
  fill('#ea4462')
  ellipse(250, 206, 25, 25);
  fill('#4d3740')
  arc(250, 206, 39, 39, PI, 0);
  fill('#fff')
  ellipse(245, 212, 7, 7);

  //neck 
  fill('#c6f7e1')
  rect(247, 236, 7, 7, 0, 0, 0, 0);
  rect(262, 236, 7, 7, 0, 0, 0, 0);
  rect(232, 236, 7, 7, 0, 0, 0, 0);
  fill('#4d3740')
  rect(200, 243, 100, 11, 0, 0, 0, 0);
  fill('#c6f7e1')
  rect(247, 254, 7, 7, 0, 0, 0, 0);
  rect(262, 254, 7, 7, 0, 0, 0, 0);
  rect(232, 254, 7, 7, 0, 0, 0, 0);

  // lower body
  //legs
  fill('#ffe6a9');
  rect(222, 361, 16, 45, 0, 0, 0, 0);
  rect(262, 361, 16, 45, 0, 0, 0, 0);

  //feet
  fill('#4d3740')
  arc(230, 410, 34, 34, PI, 0);
  arc(270, 410, 34, 34, PI, 0);
  fill('#ea4462')
  arc(230, 410, 26, 26, PI, 0);
  arc(270, 410, 26, 26, PI, 0);
  
  // main body
  fill('#ffe6a9');
  rect(200, 261, 100, 64, 0, 0, 0, 0);
  fill('#f9b341');
  arc(250, 325, 100, 100, 0, PI);
  fill('#ea4462')
  rect(200, 321, 100, 6, 0, 0, 0, 0);
  
  //arms
  fill('#c6f7e1')
  rect(300, 273, 18, 7, 0, 0, 0, 0);
  rect(182, 273, 18, 7, 0, 0, 0, 0);
  rect(324, 292, 7, 18, 0, 0, 0, 0);
  rect(170, 292, 7, 18, 0, 0, 0, 0);
  fill('#ea4462')
  rect(318, 264, 18, 28, 5, 5, 5, 5);
  rect(164, 264, 18, 28, 5, 5, 5, 5);
  
  //hands
  fill('#4d3740')
  ellipse(173, 319, 25, 25);
  ellipse(328, 319, 25, 25);

}