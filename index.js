/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeStr){
  if(parseInt(timeStr.split(':')[0]) < 12){
    return "Good Morning";
  }
  else if(parseInt(timeStr.split(':')[0]) >= 12 && parseInt(timeStr.split(':')[0]) <= 17){
    return "Good Afternoon";
  }
  else if(parseInt(timeStr.split(':')[0]) > 17){
    return "Good Evening";
  }
}

function displayMessage(message){
  document.getElementById('greeting').innerText = message;
}
