// ----------------------------------------------------------------------------------------------------
//                               Moles
// ----------------------------------------------------------------------------------------------------
var score=0;

var info = {
    moles: ""
    
  },
  lastIndex = -1,
  onload = function() {
    info.moles = this.document.querySelectorAll("#mole");
  };

$(".mol").on("click",function(){

score++;
$("#score").text("Score = "+score);


});

//Play
function play() {
  randomize();
  setTimeout(play, Math.random() * 700 + 1200);
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

// ------------------------------------------ 
//   Timer


  var counter = 20;
  $("#time").text(counter);
  var timer = setInterval(goDown, 1 * 1000);

  function goDown() {
    counter--;
    $("#time").text("Time = " + counter);

    if (counter == 0) {
      clearInterval(timer);
      $("#time").text("Time = 0");
    }
  }

  // ------------------------------------------


  // Start Moles
  play();

  // Score
$("#score").text("Score = "+score);

  // After click button disable
  $("#btn").attr("disabled", true);
});


 