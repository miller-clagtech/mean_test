var face0=new Image();
face0.src="images/d1.gif";
var face1=new Image();
face1.src="images/d2.gif";
var face2=new Image();
face2.src="images/d3.gif";
var face3=new Image();
face3.src="images/d4.gif";
var face4=new Image();
face4.src="images/d5.gif";
var face5=new Image();
face5.src="images/d6.gif";

function throwdice(){

var randomdice1 = Math.round(Math.random()*5);
var randomdice2 = Math.round(Math.random()*5);
var randomdice3 = Math.round(Math.random()*5);
var randomdice4 = Math.round(Math.random()*5);
var randomdice5 = Math.round(Math.random()*5);

document.images["mydice1"].src=eval("face"+randomdice1+".src");
document.images["mydice2"].src=eval("face"+randomdice2+".src");
document.images["mydice3"].src=eval("face"+randomdice3+".src");
document.images["mydice4"].src=eval("face"+randomdice4+".src");
document.images["mydice5"].src=eval("face"+randomdice5+".src");

var val1 = randomdice1+1;
var val2 = randomdice2+1;
var val3 = randomdice3+1;
var val4 = randomdice4+1;
var val5 = randomdice5+1;
var score = 0;

document.getElementById("text").innerHTML= val1+", "+val2+", "+val3+", "+val4+", "+val5;

if(
    (val1 == 1 && val2 == 1 && val3 == 1) ||
    (val1 == 1 && val2 == 1 && val4 == 1) ||
    (val1 == 1 && val2 == 1 && val5 == 1) ||
    (val1 == 1 && val3 == 1 && val4 == 1) ||
    (val1 == 1 && val3 == 1 && val5 == 1) ||
    (val1 == 1 && val4 == 1 && val2 == 1) ||
    (val1 == 1 && val4 == 1 && val3 == 1) ||
    (val1 == 1 && val4 == 1 && val5 == 1) ||
    (val1 == 1 && val5 == 1 && val2 == 1) ||
    (val1 == 1 && val5 == 1 && val3 == 1)
    ){
    score = 1000;
}else{
    if(val1 == 1){ score += 100; }
    if(val2 == 1){ score += 100; }
    if(val3 == 1){ score += 100; }
    if(val4 == 1){ score += 100; }
    if(val5 == 1){ score += 100; }
}
if(
    (val1 == 2 && val2 == 2 && val3 == 2) ||
    (val1 == 2 && val2 == 2 && val4 == 2) ||
    (val1 == 2 && val2 == 2 && val5 == 2) ||
    (val1 == 2 && val3 == 2 && val4 == 2) ||
    (val1 == 2 && val3 == 2 && val5 == 2) ||
    (val1 == 2 && val4 == 2 && val2 == 2) ||
    (val1 == 2 && val4 == 2 && val3 == 2) ||
    (val1 == 2 && val4 == 2 && val5 == 2) ||
    (val1 == 2 && val5 == 2 && val2 == 2) ||
    (val1 == 2 && val5 == 2 && val3 == 2)
    ){
    score += 200;
}
if(
    (val1 == 3 && val2 == 3 && val3 == 3) ||
    (val1 == 3 && val2 == 3 && val4 == 3) ||
    (val1 == 3 && val2 == 3 && val5 == 3) ||
    (val1 == 3 && val3 == 3 && val4 == 3) ||
    (val1 == 3 && val3 == 3 && val5 == 3) ||
    (val1 == 3 && val4 == 3 && val2 == 3) ||
    (val1 == 3 && val4 == 3 && val3 == 3) ||
    (val1 == 3 && val4 == 3 && val5 == 3) ||
    (val1 == 3 && val5 == 3 && val2 == 3) ||
    (val1 == 3 && val5 == 3 && val3 == 3)
    ){
    score += 300;
}
if(
    (val1 == 4 && val2 == 4 && val3 == 4) ||
    (val1 == 4 && val2 == 4 && val4 == 4) ||
    (val1 == 4 && val2 == 4 && val5 == 4) ||
    (val1 == 4 && val3 == 4 && val4 == 4) ||
    (val1 == 4 && val3 == 4 && val5 == 4) ||
    (val1 == 4 && val4 == 4 && val2 == 4) ||
    (val1 == 4 && val4 == 4 && val3 == 4) ||
    (val1 == 4 && val4 == 4 && val5 == 4) ||
    (val1 == 4 && val5 == 4 && val2 == 4) ||
    (val1 == 4 && val5 == 4 && val3 == 4)
    ){
    score += 400;
}else{
    if(val1 == 4){ score += 40; }
    if(val2 == 4){ score += 40; }
    if(val3 == 4){ score += 40; }
    if(val4 == 4){ score += 40; }
    if(val5 == 4){ score += 40; }
}
if(
    (val1 == 5 && val2 == 5 && val3 == 5) ||
    (val1 == 5 && val2 == 5 && val4 == 5) ||
    (val1 == 5 && val2 == 5 && val5 == 5) ||
    (val1 == 5 && val3 == 5 && val4 == 5) ||
    (val1 == 5 && val3 == 5 && val5 == 5) ||
    (val1 == 5 && val4 == 5 && val2 == 5) ||
    (val1 == 5 && val4 == 5 && val3 == 5) ||
    (val1 == 5 && val4 == 5 && val5 == 5) ||
    (val1 == 5 && val5 == 5 && val2 == 5) ||
    (val1 == 5 && val5 == 5 && val3 == 5)
    ){
    score += 500;
}



document.getElementById("score").innerHTML= score;

}