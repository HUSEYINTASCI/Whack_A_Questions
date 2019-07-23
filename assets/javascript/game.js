// ----------------------------------------------------------------------------------------------------
//                               Moles
// ----------------------------------------------------------------------------------------------------

var info = {
    moles: "",
    score: 0,
    counter: 20
  },
  lastIndex = -1,
  onload = function() {
    info.moles = this.document.querySelectorAll("#mole");
  };

// Mole Catch

$(".mol").on("click", function() {
  whack();
  info.score++;
  $("#score").text("Score = " + info.score);
});

//Play
var pl;
function play() {
  randomize();
  pl = setTimeout(play, Math.random() * 700 + 1200);
}

//Random Moles
function randomize() {
  var index = lastIndex;
  while (lastIndex == index) {
    index = (Math.random() * 4) | 0;
  }
  if (lastIndex != -1) {
    info.moles[lastIndex].classList.remove("active");
  }
  lastIndex = index;
  info.moles[index].classList.add("active");
}

// ----------------------------------------------------------------------------------------------------
//                              Questions
// ----------------------------------------------------------------------------------------------------

// Start Button
$("#btn").on("click", function() {
  // Backgroud Sound
  game();

  // ------------------------------------------
  //   Timer

  $("#time").text(info.counter);
  var timer = setInterval(goDown, 1 * 1000);

  function goDown() {
    info.counter--;
    $("#time").text("Time = " + info.counter);

    if (info.counter == 0) {
      clearInterval(timer);
      clearTimeout(pl);
      $("#time").text("Time = 0");
      $("#questions").html("GAME OVER");
      alert("GAME OVER");
    }
  }

  // ------------------------------------------

  // Start Moles
  play();

  // Questions
  $("<iframe>", {
    src: "assets/questions/q1.txt",
    name: "I1",
    width: "267",
    height: "118",
    frameborder: "0"
  }).appendTo("#questions");

  // Score
  $("#score").text("Score = " + info.score);

  // After click button disable
  $("#btn").attr("disabled", true);
});




//   Sounds
// ------------------------------------------

// Whack Sound
function whack() {
  var player = document.querySelector("#whack");
  player.play();
}

// Background Sound
function game() {
  var player = document.querySelector("#game");
  player.play();
}

// ------------------------------------------
