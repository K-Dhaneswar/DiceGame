var head_text=document.querySelector("h1");
var p1R=document.getElementById("player1");
var p2R=document.getElementById("player2");
var imgh=document.getElementsByClassName("img_trophy");
var rotation=0;
function gameStart(){
    var rand1=Math.floor(Math.random()*6)+1;
    var rand2=Math.floor(Math.random()*6)+1;
    var di=document.getElementsByClassName("img_dice");
    rotation+=3600
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
        head_text.style.color="green";
        p1R.style.color="green";
        p2R.style.color="green";
    }
    else if(rand1>rand2){
        result="Player 1  win's";
        imgh[0].setAttribute("src","./diceimages/winner.png");
        head_text.style.color="red";
        p1R.style.color="red";
        p2R.style.color="grey";

    }
    else{
        result="Player 2  win's"
        imgh[0].setAttribute("src","./diceimages/winner.png");
        head_text.style.color="blue";
        p1R.style.color="grey";
        p2R.style.color="blue";
    }
    head_text.innerText=result;},4500);

}