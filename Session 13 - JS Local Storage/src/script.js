// DOM Element
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  names = document.getElementById("name"),
  focus = document.getElementById("focus");

// Show Time
function showTime() {
  // Will show the current date and time
  let today = new Date(),
    hour = today.getHours(), // By default find hour between 0-23
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  //To read this as: IF AM is greater than/equal to 12, IF SO set PM else set AM
  const AM_PM = hour >= 12 ? "PM" : "AM"; //Using a Ternary Operator AKA a shorthand IF Statement | ? means IF SO | : means ELSE

  // Set 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:<span>${addZero(min)}<span>:<span>${addZero(
    sec
  )}`;

  // Call this function every second
  // setTimeout takes in a function (e.g. a self-calling function - showTime and shows it in intervals)
  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and Greeting
function setBGr() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('imgs/day.jpeg')";
    greeting.textContent = "Good Morning";
    document.body.style.color = "white";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('imgs/afternoon.jpeg')";
    greeting.textContent = "Good Afternoon";
    document.body.style.color = "white";
  } else {
    // Evening
    document.body.style.backgroundImage = "url('imgs/night.jpeg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

// Get Name Function
function getName() {
  // Check to see what's in local storage, if there isn't anything, set a default. If there is something, we'll set that
  if (localStorage.getItem("name") === null) {
    names.textContent = "[Enter name]";
  } else {
    names.textContent = localStorage.getItem("name");
  }
}

// Set Name


function setName() {
  // Make sure that keypress is on enter and tell whether it's a keypress or blur
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      names.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  // Check to see what's in local storage, if there isn't anything, set a default. If there is something, we'll set that
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

function setFocus() {
    // Make sure that keypress is on enter and tell whether it's a keypress or blur
    if (e.type === "keypress") {
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem("focus", e.target.innerText);
        focus.blur();
      }
    } else {
      localStorage.setItem("focus", e.target.innerText);
    }
  }

// Two event listeners. One for when user clicks enter, it updates. Second for when user types but clicks off, it also updates
names.addEventListener("keypress, setName");
names.addEventListener("blur, setName");
focus.addEventListener("keypress, setFocus");
focus.addEventListener("blur, setFocus");

// Run
showTime();
setBGr();
getName();
getFocus();
setName();
