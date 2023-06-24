var buttoncolors=["red","yellow","green","blue"];
var gamepattern=[];
var userclickedpattern=[];
var started=false;
var level =0;

$(document).keypress(function(){
    if(!started){
        $("#press").text("level"+ level)
        nextsequence();
        started=true;
    }

})

$(".color").click(function(){
    var userchoosencolor=$(this).attr("id");
userclickedpattern.push(userchoosencolor)
// playsound(userchoosencolor);
animationpress(userchoosencolor)
checkAnswer(userclickedpattern.length-1);

});
function checkAnswer(currentLevel){
    if(gamepattern[currentLevel]===userclickedpattern[currentLevel]){
        console.log("success");
        if(userclickedpattern.length===gamepattern.length){
            setTimeout(function(){
                nextsequence();
            },1000);
        }
    }else{
        console.log("wrong");
        // playsound("wrong");
        $("body").addClass("game-over");
        $("#press").text("Game over, Press Any key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");

        },200);
        startover();
    }
}

function animationpress(currentcolor){
    $("#"+ currentcolor).addClass("pressed");
    setTimeout(function(){
        $("#"+ currentcolor).removeClass("pressed");
    },100);
}

function startover(){
    level=0;
    gamepattern=[];
    started=false;

}


// computer function
function nextsequence(){
 userclickedpattern=[];
    level++;
    $("#press").text("level"+ level)
    let randomnumber=Math.floor(Math.random*4)
    var randomchoosecolor=buttoncolors[randomnumber];

gamepattern.push(randomchoosecolor)
$("#"+randomchoosecolor).fadeIn(100).fadeOut(100).fadeIn(100);
// playsound(randomchoosecolor)
}


function playsound(name){
    var sound = new Audio("sound/"+name+".mp3")
    sound.play();
}
function animationpress(currentcolor){
    $("#"+currentcolor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentcolor).removeClass("pressed");
    },100);

}

