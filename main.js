window.onload = function(){
  document.getElementById("mainTime").innerHTML = mainM;
  document.getElementById("pomoTime").innerHTML = pomoM;

};

function mainTime(){
  s-=1;
  if(s<0){
    m-=1;
    s=59;
  }

  if(m<0){
    if (stateSwitch===1){
      state="BreakTime";
      stateSwitch=0;
      m=pomoM;
      s=0;
    }
    else if (stateSwitch===0){
      state="Session";
      stateSwitch=1;
      m=mainM;
      s=0;

    }
  }

  document.getElementById("showTime").innerHTML = state+"-"+m+":"+s;

}


var state = "Session";
var stateSwitch = 1;
var mainM=25;
var pomoM=2;
var m=mainM;
var s=1;

setInterval(mainTime, 1000);

function theMinus(id, number){
  number = document.getElementById(id).innerHTML;
  number -= 1;
  document.getElementById(id).innerHTML = number;
}
function thePlus(id, number){
  number = document.getElementById(id).innerHTML;
  number += 1;
  document.getElementById(id).innerHTML = number;
}


//nest global variables inside function before finished
