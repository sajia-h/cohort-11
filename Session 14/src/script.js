const result = document.querySelector("#result");
const numbers = document.querySelector(".keyboard");
const num = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const clear = document.getElementById("clear");
const clearE = document.getElementById("clearentry");
// const equals = document.getElementById('#equals');

let displayVal = '0';
let pendingVal;
let sum = [];

num.forEach((number) => {
  number.addEventListener("click", displayOutput);
});
// num.addEventListener('click', displayVal);

// num.forEach((number) => {
//   number.addEventListener("click", doCalc);
// });

operator.forEach((operator) => {
  operator.addEventListener("click", doCalc);
});

function displayOutput() {
  let currentVal = event.target.innerText;
  console.log(currentVal);

  if (displayVal === "0") {
    displayVal = "";
  }
  displayVal = displayVal + currentVal;
  result.textContent = displayVal;
  console.log(displayVal);
}

function doCalc() {
    let operator = event.target.innerText;
    console.log(operator)
    // result.textContent = operator;
    
    switch (operator) {
        case '/': 
            console.log(4/2);
            pendingVal = displayVal;
            displayVal = '0';
            result.innerText = displayVal;
            sum.push(pendingVal);
            sum.push('/');
            console.log(sum);
            break;
         case 'x': 
            console.log(4*2);
            pendingVal = displayVal;
            displayVal = '0';
            result.innerText = displayVal;
            sum.push(pendingVal);
            sum.push('*');
            console.log(sum);
            break;
         case '-': 
            console.log(4-2);
            pendingVal = displayVal;
            displayVal = '0';
            result.innerText = displayVal;
            sum.push(pendingVal);
            sum.push('-');
            break;
         case '+': 
            console.log(4+2);
            pendingVal = displayVal;
            displayVal = '0';
            result.innerText = displayVal;
            sum.push(pendingVal);
            sum.push('+');
            break;
        
        case '=': 
            sum.push(displayVal);
            let calcAns = (sum.join(''));
            let results = Function("return " + calcAns)();
            displayVal = results + '';
            result.innerText = displayVal;
            console.log(sum);
            sum = [];
            break;
        } 

       clear.onclick = () => { displayVal = '0';
       pendingVal = undefined;
       sum = [];
       result.innerHTML = displayVal;
   }

   clearE.onclick = () => { 
    result.textContent = result.textContent.slice(0, -1);
    if (result.textContent == '') {
        displayVal = '0'
        result.innerHTML = displayVal;
    }
    pendingVal = undefined;
    sum = [];
}
}

// function testFunc() {
//   const num = numbers.value;

//   if (num >= 0 && num <= 9) {
//   }
// }

// function addFunc() {
//   // result.textContent = "aga";
//   console.log("hi");
// }

// number.addEventListener("click", addFunc);
// document.querySelector('.number').addEventListener('click', e => {
//     result.textContent = (e.target.innerText)
//   })

//   function display(msg) {
//     var p = document.createElement('p');
//     p.innerHTML = String(msg);
//     document.body.appendChild(p);
//   }

//   var displaySpan = document.getElementById("display");
// document.querySelectorAll('.number-btn').forEach(function(btn) {
//   btn.addEventListener('click', function(e) {
//     displaySpan.innerHTML += displaySpan.innerHTML
//       ? "-"
//       : "You have entered: ";
//     displaySpan.innerHTML += e.target.getAttribute('data');
//   });
// });
