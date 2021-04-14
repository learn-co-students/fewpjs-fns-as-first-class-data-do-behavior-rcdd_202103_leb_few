/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


function greet(timeString) {
  let time_number=parseInt(timeString,10);
  if (time_number < 12){
    return "Good Morning"
  }
  if (time_number >=12 && time_number <=17) {
    return "Good Afternoon"
  }
  if (time_number > 17) {
    return "Good Evening"
  }
  }
/* Write your implementation of displayMessage() */
//const displayMessage = greet(timeString);
function displayMessage (m){
 // greet(timeString)
  let elemt = document.getElementById ("greeting").innerText=m;
}

