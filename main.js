var state = "Session";
var stateSwitch = 1;
var m=10;
var s=1;
var globalTimer = setInterval(mainTime, 1000);

window.onload = function(){
  document.getElementById("mainTime").innerHTML = 10;
  document.getElementById("pomoTime").innerHTML = 5;
  document.getElementById("showTime").innerHTML = state+"</br>"+"00"+":"+"00"+"</br>START/RESET";
  clearInterval(globalTimer);

};

function mainTime(){
  var audio = new Audio('bell.mp3');

  s-=1;
  if(s<0){
    m-=1;
    s=59;
  }

  if(m<0){
    if (stateSwitch===1){
      state="BreakTime";
      stateSwitch=0;
      m=document.getElementById("pomoTime").innerHTML;
      s=0;
      document.getElementById("bottom").style.backgroundColor = "#36585b";

      audio.play();
    }
    else if (stateSwitch===0){
      state="Session";
      stateSwitch=1;
      m=document.getElementById("mainTime").innerHTML;
      s=0;
      audio.play();
      document.getElementById("bottom").style.backgroundColor = "#25b9f0";

    }
  }

  document.getElementById("showTime").innerHTML = state+"</br>"+m+":"+s+"</br>START/RESET";

}

function theMinus(id){
  if(parseInt(document.getElementById(id).innerHTML)>1){
  document.getElementById(id).innerHTML = number = parseInt(document.getElementById(id).innerHTML)- 1;
}else if(parseInt(document.getElementById(id).innerHTML)<=0){document.getElementById(id).innerHTML = 1;}}

function thePlus(id){
  document.getElementById(id).innerHTML = parseInt(document.getElementById(id).innerHTML)+ 1;

}

function reset(){
  clearInterval(globalTimer);
  globalTimer = setInterval(mainTime, 100);
  stateSwitch=1;
  state="Session";
  m = document.getElementById("mainTime").innerHTML;
  s = 0;
  document.getElementById("showTime").innerHTML = state+"</br>"+m+":"+s+"</br>START/RESET";
  document.getElementById("bottom").style.backgroundColor = "#25b9f0";
  }




//timer doesnt seem to run in background
