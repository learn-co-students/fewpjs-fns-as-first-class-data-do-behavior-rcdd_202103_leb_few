/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(x){
  let o=x.split(":");
  let hours = parseInt(o[0],10);
   if(hours < 12){
     return "Good Morning";
   }else if(hours>= 12 && hours <= 17){
     return "Good Afternoon";
   }else if(hours > 17){
       return "Good Evening";
   }
  
}
/* Write your implementation of displayMessage() */
function displayMessage(x){
  let update = document.getElementById("greeting").innerText = x;
}




