/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let message;
  let numTime = time.split(':');
  numTime = parseInt(numTime);

  if(numTime < 12){
    message = "Good Morning";
  }else if(numTime >= 12 && numTime <= 17){
    message = "Good Afternoon";
  } else if (numTime > 17){
    message = "Good Evening";
  }

  return message;
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById("greeting").innerText = message;
}
