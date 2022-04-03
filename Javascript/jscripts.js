let colors = ['#F2E529','#D9CC1E','#BFB417','#0D0D0D'];
let BTN = document.getElementById('BTN');
BTN.addEventListener('click',function(){
    var random = colors[Math.floor(Math.random() * colors.length)]
    let colorBtn = document.getElementById('colorBtn');
    colorBtn.style.background = random;
})
// Below is Javascript for a stop watch. I used https://mikkegoes.com/javascript-projects-for-beginners/ to find the project and used it as a guide. The creator is https://codepen.io/cathydutton. 
window.onload = function () {
  var sec = 00;
  var ten = 00;
  var appendten = document.getElementById("ten")
  var appendsec = document.getElementById("sec")
  var btnStart = document.getElementById('start');
  var btnStop = document.getElementById('stop');
  var btnReset = document.getElementById('reset');
  var Interval ;
  btnStart.onclick = function() {
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
    btnStop.onclick = function() {
       clearInterval(Interval);
  }
  btnReset.onclick = function() {
     clearInterval(Interval);
    ten = "00";
  	sec = "00";
    appendten.innerHTML = ten;
  	appendsec.innerHTML = sec;
  }
  function startTimer () {
    ten++;
    if(ten <= 9){
      appendten.innerHTML = "0" + ten;
    }
    if (ten > 9){
      appendten.innerHTML = ten;
    }
    if (ten > 99) {
      console.log("sec");
      sec++;
      appendsec.innerHTML = "0" + sec;
      ten = 0;
      appendten.innerHTML = "0" + 0;
    }
    if (sec > 9){
      appendsec.innerHTML = sec;
    }
  }
}
