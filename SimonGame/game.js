var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {                                           // Detects keypress and starts the game
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
});

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);                              // Creating an array of users inputs

    var indexOfLastAnswer = userClickedPattern.length-1                     // because we want index of array, we have to subtract array length by 1      
    checkAnswer(indexOfLastAnswer);

    playSound(userChosenColour);
    animatePress(userChosenColour);
});


function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){      // Checking if the userclicked pattern matches with gamePattern (this is called at every single click so it checks for the whole array one by one)
        if (userClickedPattern.length === gamePattern.length){              // trigger nextSequence when user has entered sequence as long as gamePattern or 'level'
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    }
    else {                                                                  // If at any point the player messes up the sequence, the above code will not be carried out. and game will be over
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
    }
}


function nextSequence() {
                                                                    // Resetting userPattern because they have to enter it all again in the correct order 
   userClickedPattern = [];                                         // only userClickedPattern is reset. The gamePattern is not reset until the game is over
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(4*Math.random());
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);                           // Add randomly selected color to gamePattern (that is built up over the levels)

    //console.log(gamePattern)

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);           // Animation to highlight new GamePattern element
    playSound(randomChosenColour);                                  
}


function animatePress(currentColour) {                              // Makes the button that the player pressed a grayish colour
    $('#' + currentColour).addClass("pressed");
    setTimeout(() => {
        $('#' + currentColour).removeClass("pressed");
      }, 100);
}

function playSound(name) {                                          // Call sounds based on their colour
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {                                              // Restart the game by resetting variables
    level = 0;
    gamePattern = [];
    started = false;
  }
  
  