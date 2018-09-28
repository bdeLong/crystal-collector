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
      $("#instructions").text("Great work, Morty! But it looks like we need more crystals! Go forth and get me more crystals! And since you've done such a great job I've decided to start logging your wins, Morty! You're a real little winner, aren't you, Morty?! Don't let it go to your head, Morty! Now quit dillying and get me those crystals! Oh, and the crystal clusters have transmogrified and the amount you harvest is back to being a mystery, so you'll have to use more math, Morty! MORE MATH! Now get clicking and save us from these tenticle monsters!")
      startGame();
    }
  
    else if (crystalsNeeded < crystalsHarvested){
      losses++;
      $("#loss-count").text(losses);
      $("#instructions").text("Oh no, Morty! You've overloaded the device with more crystals than we needed, and it's broken, Morty! You've killed us you little turd! We're going to DIE! WE'RE DEAD, MORTY! But before you start freaking out, I want you to know that I can fix the device! I can fix it, Morty! But while I'm fixing it I need you to go out and harvest this new number of crystals! And because you've done such a fantastic job of mucking up our situation, Morty, I've decided to start logging your losses! Because you need to be knocked down a peg, Morty! Not so high and mighty anymore are you?! Oh, and the crystal clusters have transmogrified and the amount you harvest is back to being a mystery, so you'll have to use more math, Morty! MORE MATH! Now get clicking and save us from these tenticle monsters!")
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