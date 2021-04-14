/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  time.split(":");
  const hours = parseInt(time);

    if(hours <= "12"){
      return "Good Morning";
    }else if(hours > "12" && hours <= "17"){
      return "Good Afternoon";
    }else if (hours > "17") {
      return "Good Evening";
    }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  let greeting = document.getElementById("greeting");
  greeting.innerText = message;
}
