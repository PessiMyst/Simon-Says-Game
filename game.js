var buttonColors = ["red", "blue", "yellow", "green"];
var gamePattern = [];
var userClickedPattern = [];
var userChosenColor;
var level = 0, ref = 0;


var audio1 = new Audio("sounds/red.mp3");
var audio2 = new Audio("sounds/yellow.mp3");
var audio3 = new Audio("sounds/green.mp3");
var audio4 = new Audio("sounds/blue.mp3");
var audio5 = new Audio("sounds/wrong.mp3");


$(".red").click(function () {
    userChosenColor = "red";
    userClickedPattern.push(userChosenColor);
    audio1.play();
    animatePress(userChosenColor);
    checkAnswer();
})

$(".green").click(function () {
    userChosenColor = "green";
    userClickedPattern.push(userChosenColor);
    audio3.play();
    animatePress(userChosenColor)
    checkAnswer();
})

$(".blue").click(function () {
    userChosenColor = "blue";
    userClickedPattern.push(userChosenColor);
    audio4.play();
    animatePress(userChosenColor);
    checkAnswer();
})

$(".yellow").click(function () {
    userChosenColor = "yellow";
    userClickedPattern.push(userChosenColor);
    audio2.play();
    animatePress(userChosenColor);
    checkAnswer();
})


$("body").keypress(function () {
    if (level == 0) {
        nextSequence();
    }
})


function animatePress(color) {
    $("." + color).addClass("pressed");
    setTimeout(function () {
        $("." + color).removeClass("pressed");
    }, 100);
}


function flash(color) {
    if (color == "red") {
        $(".red").fadeOut(25).fadeIn(25).fadeOut(25).fadeIn(25);
        audio1.play();
    }


    else if (color == "yellow") {
        $(".yellow").fadeOut(25).fadeIn(25).fadeOut(25).fadeIn(25);
        audio2.play();
    }

    else if (color == "green") {
        $(".green").fadeOut(25).fadeIn(25).fadeOut(25).fadeIn(25);
        audio3.play();
    }

    else if (color = "blue") {
        $(".blue").fadeOut(25).fadeIn(25).fadeOut(25).fadeIn(25);
        audio4.play();
    }
}

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("h1").text("LEVEL " + level);
    var randomNumber = Math.floor((Math.random() * 4));
    var chosenColor = buttonColors[randomNumber];

    gamePattern.push(chosenColor);
    flash(chosenColor);

}

function checkAnswer() {
    for (var i = 0; i < userClickedPattern.length; i++) {

        if (userClickedPattern[i] != gamePattern[i]) {
            gameOver();
            return;
        }
    }
    ref++;

    if (ref == level) {
        ref = 0;
        setTimeout(nextSequence, 1000);
    }
}

function gameOver() {
    level = 0, ref = 0;
    audio5.play();
    gamePattern = [];
    $("body").addClass("game-over");

    setTimeout(function () {
        $("body").removeClass("game-over");
        $("h1").text("Game Over!\nClick any key to restart");
    }, 200);
}



