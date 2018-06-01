// available buttons for player to choose
const moves = ["Rock", "Paper", "Scissors"];
// computer choice/ This will generate a random choice against the player
var getComputerChoice = function (max)//max sets the largest random number// 
{
    var randomNumber = Math.floor(Math.random() * Math.floor(max));
    return moves[randomNumber];
}
// grab all buttons/tags/ make them do stuff
var buttons = document.getElementsByTagName("button");
// add event listener for all buttons using a a forloop
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
}
// playing the game!
function playGame(event) {
    let playerMove = event.target.innerHTML;
    let computerMove = getComputerChoice(3);
    document.getElementById("computer-choice").innerHTML = computerMove;
    console.log(playerMove, computerMove);

    if (playerMove == computerMove) {
        document.getElementById("result").innerHTML = "You Tied!";
        return;
    }
    // this records the player moves and checks for other option
    if (playerMove == "Rock") {
        if (computerMove == "Scissors") {
            document.getElementById("result").innerHTML = "You Win!";
        } else {
            document.getElementById("result").innerHTML = "You Lose!";
        }
        return;
    }

    if (playerMove == "Paper") {
        if (computerMove == "Rock") {
            document.getElementById("result").innerHTML = "You Win!";
        } else {
            document.getElementById("result").innerHTML = "You Lose!";
        }
        return;
    }

    if (playerMove == "Scissors") {
        if (computerMove == "Paper") {
            document.getElementById("result").innerHTML = "You Win!";
        } else {
            document.getElementById("result").innerHTML = "You Lose!";
        }
        return;
    }
}