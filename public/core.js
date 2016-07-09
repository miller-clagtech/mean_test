var face1=new Image();
face1.src="images/d1.gif";
var face2=new Image();
face2.src="images/d2.gif";
var face3=new Image();
face3.src="images/d3.gif";
var face4=new Image();
face4.src="images/d4.gif";
var face5=new Image();
face5.src="images/d5.gif";
var face6=new Image();
face6.src="images/d6.gif";

function throwdice(){

var randomdice1 = Math.round(Math.random()*5)+1;
var randomdice2 = Math.round(Math.random()*5)+1;
var randomdice3 = Math.round(Math.random()*5)+1;
var randomdice4 = Math.round(Math.random()*5)+1;
var randomdice5 = Math.round(Math.random()*5)+1;

document.images["mydice1"].src=eval("face"+randomdice1+".src");
document.images["mydice2"].src=eval("face"+randomdice2+".src");
document.images["mydice3"].src=eval("face"+randomdice3+".src");
document.images["mydice4"].src=eval("face"+randomdice4+".src");
document.images["mydice5"].src=eval("face"+randomdice5+".src");


var arr = [randomdice1, randomdice2, randomdice3, randomdice4, randomdice5];
var counts = [];
var score = 0;

for(var i = 0; i< arr.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num]+1 : 1;
}

document.getElementById("text").innerHTML= randomdice1+", "+randomdice2+", "+randomdice3+", "+randomdice4+", "+randomdice5;

for(var j = 1; j<= 6; j++) {

    if(counts[j] == undefined){ counts[j] = 0 } ; 
    if(j == 1 && counts[1] == 3){
        score = 1000
    }else if(counts[j] >= 3){
        score += 100*j
    }
    
    if(j == 1 && (counts[1] != 3 || counts[1] == 0) ){
        if(counts[1] == 4 && counts[1] == 5){ counts[1] = counts[1] - 3; }
        score += 100*counts[1];
    }
    if(j == 4 && (counts[4] != 3 || counts[4] == 0) ){
        if(counts[4] == 4 && counts[4] == 5){ counts[4] = counts[4] - 3; }
        score += 40*counts[4];
    }
}

document.getElementById("score").innerHTML= score;

}
