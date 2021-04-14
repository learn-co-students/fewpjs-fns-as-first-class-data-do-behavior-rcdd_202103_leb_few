/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(TimeString){
let TimeSplit=[];
let array=[];
TimeSplit=TimeString.split(":");
for (let i = 0; i < TimeSplit.length; i++) {
  array.push(parseInt(TimeSplit[i]));
}
if(array[0]<12)
{  displayMessage("Good Morning");
  return "Good Morning";}
if((array[0]<17)&&(array[0]>12))
{displayMessage("GoodAfternoon");
return "Good Afternoon";}

if(array[0]>17)
{displayMessage("Good Evening");
  return "Good Evening";}
}
/* Write your implementation of displayMessage() */
function displayMessage(String){
let greeting=document.getElementById("greeting");
greeting.innerText=String;
}
