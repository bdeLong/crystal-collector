// Initialize variables needed for the game
$(document).ready(function () {

  var crystalsNeeded;
  var crystalOneValue;
  var crystalTwoValue;
  var crystalThreeValue;
  var crystalFourValue;
  var crystalsHarvested;
  var wins = 0;
  var losses = 0;

  function startGame() {
    crystalsNeeded = Math.floor(Math.random() * 102) + 19;
    crystalOneValue = Math.floor(Math.random() * 12) + 1;
    crystalTwoValue = Math.floor(Math.random() * 12) + 1;
    crystalThreeValue = Math.floor(Math.random() * 12) + 1;
    crystalFourValue = Math.floor(Math.random() * 12) + 1;
    crystalsHarvested = 0;
    $("#crystals-needed").text(crystalsNeeded);
    $("#crystals-harvested").text(crystalsHarvested);
    $("#crystal-one-count").text("??");
    $("#crystal-two-count").text("??");
    $("#crystal-three-count").text("??");
    $("#crystal-four-count").text("??");
  }
  startGame();

  function checkIfEqual(){
    if (crystalsNeeded == crystalsHarvested) {
      wins++;
      $("#win-count").text(wins);
      startGame();
    }
  
    else if (crystalsNeeded < crystalsHarvested){
      losses++;
      $("#loss-count").text(losses);
      startGame();
    }
  }

  // When user clicks blue crystal, it reveals the blue crystal value and increases the crystals harvested count by the blue crystal value
  $("#blue-crystal").on("click", function () {
    $("#crystal-one-count").text(crystalOneValue);
    crystalsHarvested += crystalOneValue;
    $("#crystals-harvested").text(crystalsHarvested);
    checkIfEqual();
  });

  // When user clicks red crystal, it reveals the red crystal value and increases the crystals harvested count by the red crystal value
  $("#red-crystal").on("click", function () {
    $("#crystal-two-count").text(crystalTwoValue);
    crystalsHarvested += crystalTwoValue;
    $("#crystals-harvested").text(crystalsHarvested);
    checkIfEqual();
  });

  // When user clicks clear crystal, it reveals the clear crystal value and increases the crystals harvested count by the clear crystal value
  $("#clear-crystal").on("click", function () {
    $("#crystal-three-count").text(crystalThreeValue);
    crystalsHarvested += crystalThreeValue;
    $("#crystals-harvested").text(crystalsHarvested);
    checkIfEqual();
  });

  // When user clicks purple crystal, it reveals the purple crystal value and increases the crystals harvested count by the purple crystal value
  $("#purple-crystal").on("click", function () {
    $("#crystal-four-count").text(crystalFourValue);
    crystalsHarvested += crystalFourValue;
    $("#crystals-harvested").text(crystalsHarvested);
    checkIfEqual();
  });

  setTimeout(function () {
    console.log(wins, losses);
  }, 10000);
});
