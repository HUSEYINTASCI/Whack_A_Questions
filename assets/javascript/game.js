// ----------------------------------------------------------------------------------------------------
//                               Moles
// ----------------------------------------------------------------------------------------------------
  var info = {
    moles: ''
  },
  lastIndex = -1,

 
onload = function () {
  info.moles = this.document.querySelectorAll('#mole');
  for (const mole of info.moles) {
    mole.addEventListener('click', clicked);
  }
 
}

// Start Button

$("#btn").on("click",function(){
  play();
});

//Play
function play() {
  randomize();
  setTimeout(play, (Math.random() * 700 + 1500));
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
  info.moles[index].classList.add("active")
}