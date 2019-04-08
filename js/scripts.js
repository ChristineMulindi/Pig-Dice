var player1 = {
    totalPoints: 0,
    turnPoints: 0
}
var player2 = {
    totalPoints: 0,
    turnPoints: 0
}



window.onload = function () {

    document.getElementById("player1-roll").addEventListener("click", player1roll);
    document.getElementById("player1-hold").addEventListener("click", player1hold);
    document.getElementById("player2-roll").addEventListener("click", player2roll);
    document.getElementById("player2-hold").addEventListener("click", player2hold);


    Math.randomDec = function (low, high) {
        return Math.random() * (high - low) + low;
    }

    Math.randomInt = function (low, high) {
        return Math.floor(Math.randomDec(low, high));
    }

    Math.roundTo = function (number, numberPlaces) {
        number = number * 10 ** numberPlaces;
        number = Math.round(number);
        return number / 10 ** numberPlaces;
    }


    function player1roll() {
        // Roll and Change Dice Image
        let rollNumber = Math.randomInt(1, 7)
        document.getElementById("player1-roll-img").src = "images/dice" + rollNumber + ".png";

        // Check Roll and Initiated based on 1 or not
        if (rollNumber != 1) {
            player1.turnPoints += rollNumber;
            document.getElementById("player1-turn-points").innerHTML = player1.turnPoints;
        } else {
            // Lose Turn Points
            player1.turnPoints = 0;
            document.getElementById("player1-turn-points").innerHTML = player1.turnPoints;

            //Switch to Player 2
            switchTurn1();
        }

    }

    function player1hold() {
        // Add turnpoints to total points
        player1.totalPoints += player1.turnPoints;
        document.getElementById("player1-points").innerHTML = player1.totalPoints;

        //Winner
        if (player1.totalPoints >= 100) {
            alert("PLAYER 1 WINS!!");
        } else {
            //Reset Turn Points
            player1.turnPoints = 0;
            document.getElementById("player1-turn-points").innerHTML = 0;


            //Switch Turns
            switchTurn1();

        }


    }

    function switchTurn1() {
        document.getElementById("player1-header").classList.remove("active");
        document.getElementById("player2-header").classList.add("active");
        document.getElementById("player1-roll").disabled = true;

        document.getElementById("player1-hold").disabled = true;
        document.getElementById("player2-roll").disabled = false;
        document.getElementById("player2-hold").disabled = false;
    }

    function player2roll() {
        // Roll and Change Dice Image
        let rollNumber = Math.randomInt(1, 7)
        document.getElementById("player2-roll-img").src = "images/dice" + rollNumber + ".png";

        // Check Roll and Initiated based on 1 or not
        if (rollNumber != 1) {
            player2.turnPoints += rollNumber;
            document.getElementById("player2-turn-points").innerHTML = player2.turnPoints;
        } else {
            // Lose Turn Points
            player2.turnPoints = 0;
            document.getElementById("player2-turn-points").innerHTML = player2.turnPoints;

            //Switch to Player 1
            switchTurn2();
        }

    }

    function player2hold() {
        // Add turnpoints to total points
        player2.totalPoints += player2.turnPoints;
        document.getElementById("player2-points").innerHTML = player2.totalPoints;

        //Winner
        if (player2.totalPoints >= 100) {
            alert("PLAYER 2 WINS!!");
        } else {
            //Reset Turn Points
            player2.turnPoints = 0;
            document.getElementById("player2-turn-points").innerHTML = 0;


            //Switch Turns
            switchTurn2();

        }


    }

    function switchTurn2() {
        document.getElementById("player2-header").classList.remove("active");
        document.getElementById("player1-header").classList.add("active");
        document.getElementById("player2-roll").disabled = true;

        document.getElementById("player2-hold").disabled = true;
        document.getElementById("player1-roll").disabled = false;
        document.getElementById("player1-hold").disabled = false;
    }


}

function myFunction() {
    location.reload();
}