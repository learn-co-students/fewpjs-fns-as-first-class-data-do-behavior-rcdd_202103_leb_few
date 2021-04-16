/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */

function greet(time) {
  let timeA = time.split(":");
  let timeB = timeA[0].concat(timeA[1])
  let result = parseInt(timeB, 10)

if (result < 1200) { return "Good Morning"; }

else if ((result >= 1200) && (result <= 1700)) { return "Good Afternoon"; }

else if (result > 1700) { return "Good Evening"; }

/*else { return "Test" }*/
}

/* Write your implementation of displayMessage() */

function displayMessage(textcontent){
  document.getElementById("greeting").innerText=textcontent;
}
