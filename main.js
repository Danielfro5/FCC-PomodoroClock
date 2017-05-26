var state = "Session";
var stateSwitch = 1;
var mainM=25;
var pomoM=2;
var m=mainM;
var s=1;

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
      m=document.getElementById("Time").innerHTML;
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

function theMinus(id){
  if(parseInt(document.getElementById(id).innerHTML)>0){
  number = parseInt(document.getElementById(id).innerHTML)- 1;
  document.getElementById(id).innerHTML = number;
}else if(parseInt(document.getElementById(id).innerHTML)<=0){document.getElementById(id).innerHTML = 1;}}

function thePlus(id){
  if(parseInt(document.getElementById(id).innerHTML)>0){
  number = parseInt(document.getElementById(id).innerHTML)+ 1;
  document.getElementById(id).innerHTML = number;
}else if(parseInt(document.getElementById(id).innerHTML)<=0){document.getElementById(id).innerHTML = 1;}}

function reset(){
  m = document.getElementById("mainTime").innerHTML;
  s = 0;
  document.getElementById("showTime").innerHTML = state+"-"+m+":"+s;
}

setInterval(mainTime, 1000);
//nest global variables inside function before finished, setinterval reset timer with RESET function
