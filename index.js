/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let timeSplit = timeString.split(':');
  /*let newtime = (timeSplit[0]*1+(timeSplit[1]/60);
  let finalTime = parseInt(newTime);*/
  let getHour = parseInt(timeSplit[0]);
  //alert(getHour)
  let getMinute = parseInt(timeSplit[1]);
//  alert(getMinute)
  if (getHour<12){
    displayMessage("Good Morning");
    return "Good Morning";
  } else if (getHour>17){
    displayMessage("Good Evening");
    return "Good Evening";
  }
  else displayMessage("Good Afternoon");
  return "Good Afternoon";
}
/* Write your implementation of displayMessage() */
const   displayMessage =(msg) =>{
document.getElementById("greeting").innerText = msg;
}
