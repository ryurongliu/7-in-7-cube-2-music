//audio files
var side_a_l;
var side_a_r;
var track_1;
var track_2;
var track_3;
var track_4;

//images
var a_l_img;
var a_l_binned;
var a_r_img;
var a_r_binned;
var t1_img;
var t1_binned;
var t2_img;
var t2_binned;
var t3_img;
var t3_binned;
var t4_img;
var t4_binned;

//slider positions of each sound file
var all_left_pos = 0;
var all_right_pos = 0;
var track_one_pos = 0;
var track_two_pos = 0;
var track_three_pos = 0;
var track_four_pos = 0;

let axis_x;
let axis_all_l_y;
let axis_all_r_y;
let axis_1_y;
let axis_2_y;
let axis_3_y;
let axis_4_y;

let axis_width;
let axis_height;

let label_x;

let button_x;
let step1_y;
let step2_y;
let step3_y;
let step4_y;

var slider_color = "red";

var waves_on = false;
var bins_on = false;
var bins_done = false;
var movts_on = false;
var scramble_on = false;
var final_scramble = false;

var step1_blocker_width;
var step2_blocker_width;
var step3_blocker_width;
var step4_blocker_width;

var blocker_speed = 3.6;
var blocker_1_speed = 8;
var blocker_3_speed = 2;
var wave_mult = 1;
var blocker_4_speed = 2;

var sliders;

var fs_1 = "B U' F' B' U L R' U' D2 B' F U2 L' B2 F R' L B U2 F' U' D' B' U B' D2 L2 B U F D2 F' U' R2 L2 F U B2 L R F' U' D2 F D' U";
var fs_2 = "L2 R2 D2 F2 R2 L2 U2 R' D' L' U D L U' R F L' R' B L U2 F R F' U' R' B2 F R B F' R' B' F R L B U' R2 F2 U L2 U' R F D2 L U";


var L_notes = [["L'", 0.04897959183673469],
 ["L'", 0.10808796466931553],
 ['L', 0.13579235693021138],
 ['L', 0.04897959183673469],
 ['L2', 0.2947569188502231],
 ['L2', 0.37583131477178316],
 ['L', 0.39750044180694805],
 ['L2', 0.46048199961988967],
 ['L2', 0.5240111072591629],
 ["L'", 0.55739350606938],
 ['L', 0.5884216997777431],
 ["L'", 0.6239606082149928],
 ['L', 0.6547233568757022],
 ['L', 0.04897959183673469],
 ['L', 0.7895357514054406],
 ['L2', 0.8591519545447425],
 ['L', 0.8863635889835645],
 ["L'", 0.9170733967212413]];

var R_notes = [["R'", 0.1329746410896373],
 ['R', 0.16686423615548265],
 ["R'", 0.19807309539139809],
 ["R'", 0.04897959183673469],
 ['R2', 0.36023077242439777],
 ['R', 0.39867365708730274],
 ['R2', 0.46086036062226343],
 ['R2', 0.52337803748024],
 ["R'", 0.5559785395810507],
 ['R', 0.5901021113137259],
 ["R'", 0.6243075008365429],
 ['R', 0.6574629570885846],
 ["R'", 0.6937963495875702],
 ['R', 0.7229816068284024],
 ["R'", 0.7623044955056346],
 ['R', 0.786778380812799],
 ['R2', 0.8492597764787672],
 ['R', 0.8851940758656598],
 ["R'", 0.9166232137673407]];

 var U_notes = [["U'", 0.003020964605845566],
 ['U', 0.041771129352077135],
 ['U2', 0.10099684427667888],
 ['U2', 0.16402579074488988],
 ["U'", 0.2034256850111287],
 ['U2', 0.261836183751653],
 ["U'", 0.2939239368499928],
 ['U', 0.3278364858481136],
 ["U'", 0.36000013327785024],
 ['U', 0.39214082730004246],
 ["U'", 0.4253107224992262],
 ['U', 0.45831994384559904],
 ['U2', 0.5282060357095787],
 ['U', 0.5575749206626575],
 ["U'", 0.5884283727811088],
 ['U2', 0.6550221315274678],
 ["U'", 0.691816073604914],
 ["U'", 0.04897959183673469],
 ["U'", 0.8180912834805065],
 ['U', 0.8535239404040688],
 ["U'", 0.8830949634300388],
 ['U', 0.9155621881853627]];

 var D_notes = [["D'", 0.04897959183673469],
 ["D'", 0.22862778606239476],
 ['D2', 0.29413236859914615],
 ['D2', 0.3594884944193602],
 ['D2', 0.42716957829407315],
 ["D'", 0.4573307260236849],
 ['D2', 0.5225532037773905],
 ["D'", 0.5561518093949037],
 ['D', 0.5883521082334613],
 ["D'", 0.04897959183673469],
 ['D2', 0.8853377334768784],
 ['D', 0.9170604533520119]];


 var B_notes = [['B', 0.00030172624433384026],
 ["B'", 0.032683431045742437],
 ['B', 0.065439794692876],
 ['B2', 0.13063376579527633],
 ['B', 0.1633179372735202],
 ['B2', 0.22863444995490764],
 ['B', 0.2612323610467346],
 ["B'", 0.293935413553765],
 ['B', 0.3265899677319516],
 ['B2', 0.3921508231388118],
 ['B', 0.04897959183673469],
 ['B', 0.6532032590876983],
 ['B2', 0.7183938982438421],
 ['B', 0.751066222802063],
 ["B'", 0.7837770498503585],
 ['B', 0.8163334967221053],
 ['B', 0.04897959183673469]];

 var F_notes = [["F'", 0.0036954986146507897],
 ['F2', 0.06736640006160398],
 ["F'", 0.10055813801957998],
 ['F', 0.13112689384123055],
 ["F'", 0.1642975294729157],
 ['F', 0.3287127877135592],
 ["F'", 0.3595303288556912],
 ['F', 0.3921186143249995],
 ["F'", 0.424559183510272],
 ['F', 0.4572800063973368],
 ['F2', 0.5229989441432529],
 ['F2', 0.5901709806732308],
 ["F'", 0.6217111839367611],
 ['F', 0.6566199848655596],
 ["F'", 0.685851149373372],
 ['F', 0.71967965928258],
 ["F'", 0.7512283775198769],
 ['F', 0.7838318418554646],
 ['F2', 0.8513722435549052],
 ['F', 0.8852451794141993]];



function preload() {
    side_a_l = loadSound('/7-in-7-cube-2-music/audio/op1/side_a_l.wav');
    side_a_r = loadSound('/7-in-7-cube-2-music/audio/op1/side_a_r.wav');
    track_1 = loadSound('/7-in-7-cube-2-music/audio/op1/track_1.wav');
    track_2 = loadSound('/7-in-7-cube-2-music/audio/op1/track_2.wav');
    track_3 = loadSound('/7-in-7-cube-2-music/audio/op1/track_3.wav');
    track_4 = loadSound('/7-in-7-cube-2-music/audio/op1/track_4.wav');

    a_l_img = loadImage('/7-in-7-cube-2-music/img/all_l.png');
    a_l_binned = loadImage('/7-in-7-cube-2-music/img/all_l_binned.png');
    a_r_img = loadImage('/7-in-7-cube-2-music/img/all_r.png');
    a_r_binned = loadImage('/7-in-7-cube-2-music/img/all_r_binned.png');
    t1_img = loadImage('/7-in-7-cube-2-music/img/1.png');
    t1_binned = loadImage('/7-in-7-cube-2-music/img/1_binned.png');
    t2_img = loadImage('/7-in-7-cube-2-music/img/2.png');
    t2_binned = loadImage('/7-in-7-cube-2-music/img/2_binned.png');
    t3_img = loadImage('/7-in-7-cube-2-music/img/3.png');
    t3_binned = loadImage('/7-in-7-cube-2-music/img/3_binned.png');
    t4_img = loadImage('/7-in-7-cube-2-music/img/4.png');
    t4_binned = loadImage('/7-in-7-cube-2-music/img/4_binned.png');
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    canvas.style("z-index", -1);
    getAudioContext().suspend();

    axis_x = width/2;
    axis_all_l_y = 3*height/32;
    axis_all_r_y = 7*height/32;
    axis_1_y = 7*height/16;
    axis_2_y = 9*height/16;
    axis_3_y = 11*height/16;
    axis_4_y = 13*height/16;

    axis_height = height / 15;
    axis_width = width / 2;

    label_x = width/6;

    button_x = 5*width/6;
    step1_y = height/3;
    step2_y = height/2;
    step3_y = 2*height/3;
    step4_y = 5*height/6;

    step1_blocker_width = axis_width;
    step2_blocker_width = axis_width;
    step3_blocker_width = axis_width;
    step4_blocker_width = axis_width;

    slider_all_left = createSlider(0, axis_width, 0, 0);
    slider_all_left.position(axis_x, axis_all_l_y);
    slider_all_left.addClass("slider");

    slider_all_right = createSlider(0, axis_width, 0, 0);
    slider_all_right.position(axis_x, axis_all_r_y);
    slider_all_right.addClass("slider");

    slider_1 = createSlider(0, axis_width, 0, 0);
    slider_1.position(axis_x, axis_1_y);
    slider_1.addClass("slider");

    slider_2 = createSlider(0, axis_width, 0, 0);
    slider_2.position(axis_x, axis_2_y);
    slider_2.addClass("slider");

    slider_3 = createSlider(0, axis_width, 0, 0);
    slider_3.position(axis_x, axis_3_y);
    slider_3.addClass("slider");

    slider_4 = createSlider(0, axis_width, 0, 0);
    slider_4.position(axis_x, axis_4_y);
    slider_4.addClass("slider");

    sliders = [slider_all_left, slider_all_right, slider_1, slider_2, slider_3, slider_4];


    step1_button = createButton("1. load waveforms");
    step1_button.position(30, 32);
    step1_button.mousePressed(load_waves);
    step1_button.addClass("button");

    step2_button = createButton("2. bin data");
    step2_button.position(200, 32);
    step2_button.mousePressed(load_bins);
    step2_button.addClass("button");

    step3_button = createButton("3. generate movements");
    step3_button.position(width-320, 32);
    step3_button.mousePressed(load_movts);
    step3_button.addClass("button");

    step4_button = createButton("4. combine scramble");
    step4_button.position(width-150, 32);
    step4_button.mousePressed(load_scramble);
    step4_button.addClass("button");

    scramble_button = createButton("");
    scramble_button.position(axis_x-axis_width/2, axis_all_r_y+2.5*axis_height+2);
    scramble_button.mousePressed(draw_final_scramble);
    scramble_button.addClass("scramble-button");

}

function load_waves(){
  waves_on = true;
}

function load_bins(){
  bins_on = true;
}

function load_movts(){
  movts_on = true;
}

function load_scramble(){
  scramble_on = true;
}

function draw_final_scramble(){
  final_scramble = true;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(150);

  draw_buttons();
  translate(0, height/15);

  if (bins_on){
    if (step2_blocker_width > 0){
      step2_blocker_width -= blocker_speed;
      for(var i = 0; i < sliders.length; i++){
        sliders[i].value(axis_width - step2_blocker_width);
      }
    }
    if (wave_mult > 0.01){
      wave_mult -= 0.005;
    }
    else{
      for(var i = 0; i < sliders.length; i++){
        sliders[i].value(0);
      }
      bins_on = false;
      bins_done = true;
    }

  }

  if (waves_on){
    if (step1_blocker_width > 0){
      step1_blocker_width -= blocker_1_speed;
      for(var i = 0; i < sliders.length; i++){
        sliders[i].value(axis_width - step1_blocker_width);
      }
    }
    else{
      for(var i = 0; i < sliders.length; i++){
        sliders[i].value(0);
      }
      waves_on = false;
    }
  }

  if (movts_on){
    if (step3_blocker_width > 0){
      step3_blocker_width -= blocker_3_speed;
      for(var i = 0; i < sliders.length; i++){
        sliders[i].value(axis_width - step3_blocker_width);
      }
    }
    else{
      for(var i = 0; i < sliders.length; i++){
        sliders[i].value(0);
      }
      movts_on = false;
    }
  }

  if (scramble_on){
    if (step4_blocker_width > 0){
      step4_blocker_width -= blocker_4_speed;
      for(var i = 0; i < sliders.length; i++){
        sliders[i].value(axis_width - step4_blocker_width);
      }
    }
    else{
      for(var i = 0; i < sliders.length; i++){
        sliders[i].value(0);
      }
      scramble_on = false;
      scramble_button.style("cursor", "pointer");
      scramble_button.style("z-index", "1");
    }
  }



  draw_waves_faded();
  tint(255, 255);
  draw_binned();
  draw_step2_blockers();
  if (bins_done == false){
    draw_waves(255);
  }
  draw_step1_blockers();

  draw_notation();
  draw_notation_blockers();

  draw_scramble(255);
  draw_scramble_blocker();

  draw_axes();
  draw_track_labels();

  if (final_scramble){

    noStroke();
    fill(255);
    rect(width/7-24, height/3-20, .75*width, 50, 4);
    textFont("Courier");
    textSize(14);
    fill(0);
    text(fs_1, width/7, height/3);
    text(fs_2, width/7, height/3 + 20);
  }


}

function draw_buttons(){
  push();
  noStroke();
  fill(200);
  rect(30, 30, 120, 45, 20);
  rect(200, 30, 120, 45, 20);
  rect(width-150, 30, 120, 45, 20);
  rect(width-320, 30, 120, 45, 20);
  pop();
}

function draw_scramble(alp){
  push();
  noStroke();
  fill(200);
  rect(axis_x-axis_width/2, axis_all_r_y+25*axis_height/16+2, axis_width-4, 2*axis_height/3-2, 4);
  textFont("Courier");
  textSize(14);
  noStroke();
  //strokeWeight(1);
  push();
  fill("orange");
  translate(axis_x - axis_width/2, axis_all_r_y+2*axis_height);
  for (var i = 0; i < L_notes.length; i++){
    note = L_notes[i]
    move = note[0]
    place = note[1]*axis_width
    text(move, place, 0);
  }
  pop();
  push();
  fill("red");
  translate(axis_x - axis_width/2, axis_all_r_y+2*axis_height);
  for (var i = 0; i < R_notes.length; i++){
    note = R_notes[i]
    move = note[0]
    place = note[1]*axis_width
    text(move, place, 0);
  }
  pop();
  push();
  fill("white");
  translate(axis_x - axis_width/2, axis_all_r_y+2*axis_height);
  for (var i = 0; i < U_notes.length; i++){
    note = U_notes[i]
    move = note[0]
    place = note[1]*axis_width
    text(move, place, 0);
  }
  pop();
  push();
  fill("yellow");
  translate(axis_x - axis_width/2, axis_all_r_y+2*axis_height);
  for (var i = 0; i < D_notes.length; i++){
    note = D_notes[i]
    move = note[0]
    place = note[1]*axis_width
    text(move, place, 0);
  }
  pop();
  push();
  fill("blue");
  translate(axis_x - axis_width/2, axis_all_r_y+2*axis_height);
  for (var i = 0; i < B_notes.length; i++){
    note = B_notes[i]
    move = note[0]
    place = note[1]*axis_width
    text(move, place, 0);
  }
  pop();
  push();
  fill("green");
  translate(axis_x - axis_width/2, axis_all_r_y+2*axis_height);
  for (var i = 0; i < F_notes.length; i++){
    note = F_notes[i]
    move = note[0]
    place = note[1]*axis_width
    text(move, place, 0);
  }
  pop();
  pop();
}


function draw_scramble_blocker(){
  push();
  noStroke();
  fill(150);
  rect(axis_x+axis_width/2 - step4_blocker_width, axis_all_r_y+10*axis_height/8, step4_blocker_width, axis_height);
  pop();
}

function draw_notation(){
  push();
  textFont("Courier");
  textSize(14);
  noStroke();
  //strokeWeight(1);
  push();
  fill("orange");
  translate(axis_x - axis_width/2, axis_all_l_y+axis_height);
  for (var i = 0; i < L_notes.length; i++){
    note = L_notes[i]
    move = note[0]
    place = note[1]*axis_width
    text(move, place, 0);
  }
  pop();
  push();
  fill("red");
  translate(axis_x - axis_width/2, axis_all_r_y+axis_height);
  for (var i = 0; i < R_notes.length; i++){
    note = R_notes[i]
    move = note[0]
    place = note[1]*axis_width
    text(move, place, 0);
  }
  pop();
  push();
  fill("white");
  translate(axis_x - axis_width/2, axis_1_y+axis_height);
  for (var i = 0; i < U_notes.length; i++){
    note = U_notes[i]
    move = note[0]
    place = note[1]*axis_width
    text(move, place, 0);
  }
  pop();
  push();
  fill("yellow");
  translate(axis_x - axis_width/2, axis_2_y+axis_height);
  for (var i = 0; i < D_notes.length; i++){
    note = D_notes[i]
    move = note[0]
    place = note[1]*axis_width
    text(move, place, 0);
  }
  pop();
  push();
  fill("blue");
  translate(axis_x - axis_width/2, axis_3_y+axis_height);
  for (var i = 0; i < B_notes.length; i++){
    note = B_notes[i]
    move = note[0]
    place = note[1]*axis_width
    text(move, place, 0);
  }
  pop();
  push();
  fill("green");
  translate(axis_x - axis_width/2, axis_4_y+axis_height);
  for (var i = 0; i < F_notes.length; i++){
    note = F_notes[i]
    move = note[0]
    place = note[1]*axis_width
    text(move, place, 0);
  }
  pop();
  pop();
}

function draw_notation_blockers(){
  push();
  noStroke();
  fill(150);
  rect(axis_x+axis_width/2 - step3_blocker_width, axis_all_l_y+3*axis_height/4, step3_blocker_width, axis_height/3);
  rect(axis_x+axis_width/2 - step3_blocker_width, axis_all_r_y+3*axis_height/4, step3_blocker_width, axis_height/3);
  rect(axis_x+axis_width/2 - step3_blocker_width, axis_1_y+3*axis_height/4, step3_blocker_width, axis_height/3);
  rect(axis_x+axis_width/2 - step3_blocker_width, axis_2_y+3*axis_height/4, step3_blocker_width, axis_height/3);
  rect(axis_x+axis_width/2 - step3_blocker_width, axis_3_y+3*axis_height/4, step3_blocker_width, axis_height/3);
  rect(axis_x+axis_width/2 - step3_blocker_width, axis_4_y+3*axis_height/4, step3_blocker_width, axis_height/3);
  pop();
}

function draw_step2_blockers(){
  push();
  noStroke();
  fill(150);
  rect(axis_x+axis_width/2 - step2_blocker_width, axis_all_l_y-axis_height/2, step2_blocker_width, axis_height);
  rect(axis_x+axis_width/2 - step2_blocker_width, axis_all_r_y-axis_height/2, step2_blocker_width, axis_height);
  rect(axis_x+axis_width/2 - step2_blocker_width, axis_1_y-axis_height/2, step2_blocker_width, axis_height);
  rect(axis_x+axis_width/2 - step2_blocker_width, axis_2_y-axis_height/2, step2_blocker_width, axis_height);
  rect(axis_x+axis_width/2 - step2_blocker_width, axis_3_y-axis_height/2, step2_blocker_width, axis_height);
  rect(axis_x+axis_width/2 - step2_blocker_width, axis_4_y-axis_height/2, step2_blocker_width, axis_height);
  pop();
}

function draw_step1_blockers(){
  push();
  noStroke();
  fill(150);
  rect(axis_x+axis_width/2 - step1_blocker_width, axis_all_l_y-axis_height/2, step1_blocker_width, axis_height);
  rect(axis_x+axis_width/2 - step1_blocker_width, axis_all_r_y-axis_height/2, step1_blocker_width, axis_height);
  rect(axis_x+axis_width/2 - step1_blocker_width, axis_1_y-axis_height/2, step1_blocker_width, axis_height);
  rect(axis_x+axis_width/2 - step1_blocker_width, axis_2_y-axis_height/2, step1_blocker_width, axis_height);
  rect(axis_x+axis_width/2 - step1_blocker_width, axis_3_y-axis_height/2, step1_blocker_width, axis_height);
  rect(axis_x+axis_width/2 - step1_blocker_width, axis_4_y-axis_height/2, step1_blocker_width, axis_height);
  pop();

}

function draw_track_labels(){
  push();
  rectMode(CENTER);
  textFont("Courier");
  textSize(15);
  text("Master (L)", label_x, axis_all_l_y-axis_height+height/14);
  text("Master (R)", label_x, axis_all_r_y-axis_height+height/14);
  text("Track 1", label_x+width/100, axis_1_y-axis_height+height/14);
  text("Track 2", label_x+width/100, axis_2_y-axis_height+height/14);
  text("Track 3", label_x+width/100, axis_3_y-axis_height+height/14);
  text("Track 4", label_x+width/100, axis_4_y-axis_height+height/14);
  pop();
}

function draw_waves_faded(){
  tint(255, 100);
  image(a_l_img, axis_x-axis_width/2, axis_all_l_y-axis_height, axis_width, axis_height*2);
  image(a_r_img, axis_x-axis_width/2, axis_all_r_y-axis_height, axis_width, axis_height*2);
  image(t1_img, axis_x-axis_width/2, axis_1_y-axis_height, axis_width, axis_height*2);
  image(t2_img, axis_x-axis_width/2, axis_2_y-axis_height, axis_width, axis_height*2);
  image(t3_img, axis_x-axis_width/2, axis_3_y-axis_height, axis_width, axis_height*2);
  image(t4_img, axis_x-axis_width/2, axis_4_y-axis_height, axis_width, axis_height*2);
}

function draw_waves(op){
  tint(255, op);
  image(a_l_img.get(3319*(1-wave_mult), 0, 3319*wave_mult,309), axis_x-axis_width/2+(axis_width*(1-wave_mult)), axis_all_l_y-axis_height, axis_width*wave_mult, axis_height*2);
  image(a_r_img.get(3319*(1-wave_mult), 0, 3319*wave_mult,309), axis_x-axis_width/2+(axis_width*(1-wave_mult)), axis_all_r_y-axis_height, axis_width*wave_mult, axis_height*2);
  image(t1_img.get(3319*(1-wave_mult), 0, 3319*wave_mult,309), axis_x-axis_width/2+(axis_width*(1-wave_mult)), axis_1_y-axis_height, axis_width*wave_mult, axis_height*2);
  image(t2_img.get(3319*(1-wave_mult), 0, 3319*wave_mult,309), axis_x-axis_width/2+(axis_width*(1-wave_mult)), axis_2_y-axis_height, axis_width*wave_mult, axis_height*2);
  image(t3_img.get(3319*(1-wave_mult), 0, 3319*wave_mult,309), axis_x-axis_width/2+(axis_width*(1-wave_mult)), axis_3_y-axis_height, axis_width*wave_mult, axis_height*2);
  image(t4_img.get(3319*(1-wave_mult), 0, 3319*wave_mult,309), axis_x-axis_width/2+(axis_width*(1-wave_mult)), axis_4_y-axis_height, axis_width*wave_mult, axis_height*2);
}

function mousePressed() {
    userStartAudio();
}

function draw_axes() {
  push();
  //translate(0, height/15);
  //all tracks axes (left and right)
  draw_axis(axis_x, axis_all_l_y, slider_all_left.value());
  draw_axis(axis_x, axis_all_r_y, slider_all_right.value());
  //track_1 axis
  draw_axis(axis_x, axis_1_y, slider_1.value());
  //track_2 axis
  draw_axis(axis_x, axis_2_y, slider_2.value());
  //track_3 axis_
  draw_axis(axis_x, axis_3_y, slider_3.value());
  //track_4 axis
  draw_axis(axis_x, axis_4_y, slider_4.value());
  pop();
}

function draw_binned() {
  image(a_l_binned, axis_x-axis_width/2, axis_all_l_y-axis_height/2, axis_width, axis_height);
  image(a_r_binned, axis_x-axis_width/2, axis_all_r_y-axis_height/2, axis_width, axis_height);
  image(t1_binned, axis_x-axis_width/2, axis_1_y-axis_height/2, axis_width, axis_height);
  image(t2_binned, axis_x-axis_width/2, axis_2_y-axis_height/2, axis_width, axis_height);
  image(t3_binned, axis_x-axis_width/2, axis_3_y-axis_height/2, axis_width, axis_height);
  image(t4_binned, axis_x-axis_width/2, axis_4_y-axis_height/2, axis_width, axis_height);
}

function draw_axis(x, y, slider_pos){
  push();
  stroke(0, 0, 0, 50);
  strokeWeight(2);
  translate(x-axis_width/2, y);
  line(0, 0, axis_width, 0);
  stroke(0);
  line(0, -axis_height/2, 0, axis_height/2);
  stroke("red");
  strokeWeight(2);
  line(slider_pos, -axis_height/2, slider_pos, axis_height/2);
  pop();
}
