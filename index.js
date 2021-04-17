/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){

    const splits = timeString.split(":");
    let parsed = parseInt(splits[0], 10);

    if ( parsed < 12) return "Good Morning"
  if ( parsed > 17) return "Good Evening"
  return "Good Afternoon"

}
/* Write your implementation of displayMessage() */
function displayMessage(timeString){
  let content = document.getElementById("greeting").innerText = (timeString);
}
