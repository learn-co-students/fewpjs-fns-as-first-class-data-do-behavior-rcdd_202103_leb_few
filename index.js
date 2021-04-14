/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
const Time24 = (time12h) => {
  const [time, modifier] = time12h.split(' ');

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
}
greet(Time24) {

  if (time<12:00pm){let timeless = prompt("Good Morning");
  prompt( document.getElementById("greeting").write =${timeless};
    )
  }
    else if (time>=5:00 | time <=12:00) {
      return  "Good Afternoon";
    }
 else {
   return "Good Evening";
 }
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
