/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timestring){

  let s=timestring.split(":");
  let h=s[0];
  let m=s[1];
  let h1=parseInt(h);
  let s1=parseInt(s);
  if(h1<12)
  {return "Good Morning";}
  else if ((h1>=12) && (h1<=17))
  {return "Good Afternoon";}
  else if (h1>17)
{  return "Good Evening";}
}

 function  displayMessage(string){
  let x=document.getElementById("greeting");
  x.innerText=string;
}
