

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
      m=pomoM-1;
    }
    else if (stateSwitch===0){
      state="Session";
      stateSwitch=1;
      m=mainM-1;
    }
  }

  console.log(state+"-"+m+":"+s);

}


var state = "Session";
var stateSwitch = 1;
var mainM=1;
var pomoM=2;
var m=mainM;
var s=0;

setInterval(mainTime, 1000);

//remove global variables before finished
