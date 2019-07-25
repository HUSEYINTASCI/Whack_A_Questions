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
  // select questions
  getquestion();

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

  // Score
  $("#score").text("Score = " + info.score);

  // After click button disable
  $("#btn").attr("disabled", true);
});
// ---------------------------------------------------------------------------------------------------------------
// Questions

function getquestion() {
  var que = ["q1.txt", "q2.txt", "q3.txt", "q4.txt", "q5.txt"];

  var qarr = new randomquestion(que);

  $("<iframe>", {
    src: "assets/questions/" + qarr.getque(),
    name: "I1",
    width: "267",
    height: "118",
    frameborder: "0"
  }).appendTo("#questions");

  function randomquestion(arr, rq) {
    if (!arr) {
      return;
    }

    var length = arr.length;
    this.indexes = [];

    this.remainingItems = function() {
      return this.indexes.length;
    };

    this[rq || "getque"] = function() {
      var rand = Math.floor(Math.random() * this.indexes.length),
        item = arr[this.indexes[rand]];
      this.indexes.splice(rand, 1);
      return item;
    };

    while (length--) {
      this.indexes[this.indexes.length] = length;
    }
  }
}
// ---------------------------------------------------------------------------------------------------------------


//   Sounds
// ------------------------------------------

// Whack Sound
var player = document.querySelector("#whack");
function whack() {
  player.play();
}

// Background Sound
var player2 = document.querySelector("#game");
function game() {
  player2.play();
}

// Sound Mute
document.querySelector("#check").onclick = function() {
  var x = document.querySelector("#check").value;
  if (x == 1) {
    player2.muted = true;
  }
};

// ------------------------------------------
