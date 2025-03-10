var head_text=document.querySelector("h1");
var p1R=document.getElementById("player1");
var p2R=document.getElementById("player2");
var imgh=document.getElementsByClassName("img_trophy");
var rotation=0;
function gameStart(){
    var rand1=Math.floor(Math.random()*6)+1;
    var rand2=Math.floor(Math.random()*6)+1;
    var di=document.getElementsByClassName("img_dice");
    rotation+=3600;
    di[0].style.transform="rotatex("+rotation+"deg)";
    di[1].style.transform="rotatex("+rotation+"deg)";
    setTimeout(() =>{
    di[0].setAttribute("src","./diceimages/dice"+rand1+".png");
    di[1].setAttribute("src","./diceimages/dice"+rand2+".png");
    },4500);
    setTimeout(()=>{
    p1R.innerText=rand1;
    p2R.innerText=rand2;
    if(rand1==rand2){
        result="Draw!!!";
        imgh[0].setAttribute("src","./diceimages/draw.webp");
        head_text.style.color="orange";
        p1R.style.color="orange";
        p2R.style.color="orange";
    }
    else if(rand1>rand2){
        result="Player 1  win's";
        imgh[0].setAttribute("src","./diceimages/winner.png");
        head_text.style.color="crimson";
        p1R.style.color="crimson";
        p2R.style.color="grey";

    }
    else{
        result="Player 2  win's";
        imgh[0].setAttribute("src","./diceimages/winner.png");
        head_text.style.color="rgb(39, 12, 192)";
        p1R.style.color="grey";
        p2R.style.color="rgb(39, 12, 192)";
    }
    head_text.innerText=result;},4500);

}
