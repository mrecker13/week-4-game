$(document).ready(function() {

    var startingScore = 0;
    var diamondPoints = Math.floor(Math.random() * 12) + 1;
    var emeraldPoints = Math.floor(Math.random() * 12) + 1;
    var rubyPoints = Math.floor(Math.random() * 12) + 1;
    var sapphirePoints = Math.floor(Math.random() * 12) + 1;
    var winningScore = Math.floor(Math.random() * 120) + 19;
    var wins = 0;
    var losses = 0;

    function startGame () {
        startingScore = 0;
        diamondPoints = Math.floor(Math.random() * 12) + 1;
        emeraldPoints = Math.floor(Math.random() * 12) + 1;
        rubyPoints = Math.floor(Math.random() * 12) + 1;
        sapphirePoints = Math.floor(Math.random() * 12) + 1;
        winningScore = Math.floor(Math.random() * 120) + 19;
        $(".winning-score").text(winningScore);
        $(".your-score").text(startingScore);
    }

    startGame();

    // when first crystal is pressed
    $("#crystal-one").on("click", function () {
    // if that number is less than winningScore number, add that number to the startingScore
        if (diamondPoints + startingScore < winningScore) {
            diamondPoints = parseInt(diamondPoints);
            $(".your-score").text(function() {
                startingScore = startingScore + diamondPoints;
                return startingScore;
            });
        }
        // if it is more than the winningScore, then add one to lose and restart the game.
        else if (diamondPoints + startingScore > winningScore) {
            losses++;
            $(".losses").text("Losses: " + losses);
            startGame();
        }
        // if they equal then 
        else {
            wins++;
            $(".wins").text("Wins: " + wins);
            startGame();
        }
    });

    // when second crystal is pressed
    $("#crystal-two").on("click", function () {
        // if that number is less than winningScore number, add that number to the startingScore
        if (emeraldPoints + startingScore < winningScore) {
            emeraldPoints = parseInt(emeraldPoints);
            $(".your-score").text(function() {
                startingScore = startingScore + emeraldPoints;
                return startingScore;
            });
        }
        // if it is more than the winningScore, then add one to lose and restart the game.
        else if (emeraldPoints + startingScore > winningScore) {
            losses++;
            $(".losses").text("Losses: " + losses);
            startGame();
        }
        // if they equal then 
        else {
            wins++;
            $(".wins").text("Wins: " + wins);
            startGame();
        }
    });

    // when third crystal is pressed
    $("#crystal-three").on("click", function () {
        // if that number is less than winningScore number, add that number to the startingScore
        if (rubyPoints + startingScore < winningScore) {
            rubyPoints = parseInt(rubyPoints);
            $(".your-score").text(function() {
                startingScore = startingScore + rubyPoints;
                return startingScore;
            });
        }
        // if it is more than the winningScore, then add one to lose and restart the game.
        else if (rubyPoints + startingScore > winningScore) {
            losses++;
            $(".losses").text("Losses: " + losses);
            startGame();
        }
        // if they equal then 
        else {
            wins++;
            $(".wins").text("Wins: " + wins);
            startGame();
        }
    });

    // when fourth crystal is pressed
    $("#crystal-four").on("click", function () {
        // if that number is less than winningScore number, add that number to the startingScore
        if (sapphirePoints + startingScore < winningScore) {
            sapphirePoints = parseInt(sapphirePoints);
            $(".your-score").text(function() {
                startingScore = startingScore + sapphirePoints;
                return startingScore;
            });
        }
        // if it is more than the winningScore, then add one to lose and restart the game.
        else if (sapphirePoints + startingScore > winningScore) {
            losses++;
            $(".losses").text("Losses: " + losses);
            startGame();
        }
        // if they equal then 
        else {
            wins++;
            $(".wins").text("Wins: " + wins);
            startGame();
        }
    });

});