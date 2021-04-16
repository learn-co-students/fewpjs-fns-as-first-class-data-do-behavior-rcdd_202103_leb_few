/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){

    const splits = timeString.split(0, str.indexOf(','));
    let parsed = parseInt(splits, 2);
    for(let i=0;i<parsed.length;i++){
    if(parsed[i] < 12)
      return "Good Morning";
      else if(12<parsed[i]<17)
           return"Good Afternoon";
           else
           return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(timeString){
  let content = document.getElementById("greeting").innerText;
  console.log(element)
}
