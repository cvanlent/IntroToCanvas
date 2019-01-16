function myMove() {
  var elem = document.querySelector("#object"); 
  var pos = 125;
  var id = setInterval(frame, 5);

  function frame() {
    if (pos == 500) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}

function randomColor(){
  //Now do funky math to change the color
      var color = '#'; // 
            var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set your colors here
                color += letters[Math.floor(Math.random() * letters.length)];
}