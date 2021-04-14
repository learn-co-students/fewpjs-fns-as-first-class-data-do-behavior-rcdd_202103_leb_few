document.querySelector("button").addEventListener("click", handleClick);
function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(timeString){
  let th=timeString.split(":")[0];
  if (th<12){
    return "Good Morning";
  }
  else if (th>12 && th<17){
    return "Good Afternoon";
  }
  else{
      return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
 let testContent = "TEST";
function displayMessage(testContent){
  document.getElementById("greeting").innerText = testContent;
}
displayMessage(greet());
