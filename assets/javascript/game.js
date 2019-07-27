// ----------------------------------------------------------------------------------------------------
//                               Moles
// ----------------------------------------------------------------------------------------------------

var info = {
    moles: "",
    score: 0,
    counter: 10
  },
  lastIndex = -1,
  onload = function() {
    info.moles = this.document.querySelectorAll("#mole");
  };

// Mole Catch

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






// ------------------------------------------
  //   Timer

  function tp(){
  $("#time").text(info.counter);
  var timer = setInterval(goDown, 1 * 1000);

  function goDown() {
    info.counter--;
    $("#time").text("Time = " + info.counter);

    if (info.counter <= 0) {
     
      $("#time").text(info.counter);
      clearInterval(info.counter);
      info.counter = 10;
      loaded();
      return;
     
    
    }
  }
}
  function loaded(){

    clearTimeout(pl);
    $("#questions").html("");
      // Backgroud Sound
      game();
      // select questions
      getquestion();
      play();
    
  }
  // ------------------------------------------

// Start Button
$("#btn").on("click", function bnt() {
  
  tp();
  // Backgroud Sound
 loaded();
  // Score
  $("#score").text("Score = " + info.score);

  // After click button disable
  $("#btn").attr("disabled", true);
});

// ---------------------------------------------------------------------------------------------------------------
// Questions

function getquestion() {
  var que = ["q1", "q2", "q3", "q4", "q5"];
  var qarr = new randomquestion(que);
  var hh = qarr.getque();

  $("<iframe>", {
    src: "assets/questions/" + hh + ".txt",
    name: hh,
    width: "267",
    height: "118",
    frameborder: "0"
  }).appendTo("#questions");
 
}

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

$(document).on("click", ".mol", function() {
 // Select iframe name
  var kr=document.querySelector("iframe").name;
  
 // Whack Sound
  whack();

  // Mole id
  var ry = $(this).data("value");

  // if question and mole mach
  if (kr== ry) {
    info.score++;
    $("#score").text("Score = " + info.score);
    alert("Great");
    // Loaded Functions
    loaded();
  }
});

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
