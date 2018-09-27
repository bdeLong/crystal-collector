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
    if (crystalsNeeded === crystalsHarvested) {
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

  // When user clicks first crystal, it reveals the first crystal value and increases the crystals harvested count by the first crystal value
  $("#first-crystal").on("click", function () {
    $("#crystal-one-count").text(crystalOneValue);
    crystalsHarvested += crystalOneValue;
    $("#crystals-harvested").text(crystalsHarvested);
    checkIfEqual();
  });

  // When user clicks second crystal, it reveals the second crystal value and increases the crystals harvested count by the second crystal value
  $("#second-crystal").on("click", function () {
    $("#crystal-two-count").text(crystalTwoValue);
    crystalsHarvested += crystalTwoValue;
    $("#crystals-harvested").text(crystalsHarvested);
    checkIfEqual();
  });

  // When user clicks third crystal, it reveals the third crystal value and increases the crystals harvested count by the third crystal value
  $("#third-crystal").on("click", function () {
    $("#crystal-three-count").text(crystalThreeValue);
    crystalsHarvested += crystalThreeValue;
    $("#crystals-harvested").text(crystalsHarvested);
    checkIfEqual();
  });

  // When user clicks fourth crystal, it reveals the fourth crystal value and increases the crystals harvested count by the fourth crystal value
  $("#fourth-crystal").on("click", function () {
    $("#crystal-four-count").text(crystalFourValue);
    crystalsHarvested += crystalFourValue;
    $("#crystals-harvested").text(crystalsHarvested);
    checkIfEqual();
  });

});
