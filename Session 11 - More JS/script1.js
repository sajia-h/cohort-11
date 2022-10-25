function validateNum() {
  let x = document.getElementById("number").value;
  let check = document.forms["myForm"]["number"].value;

  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x == "") {
    text = "Input not valid";
    document.getElementById("alert").innerHTML = text;
    return false;
  } else {
    return true;
  }
}

function addOp() {
  let a = document.getElementById("num1").value;
  let b = document.getElementById("num2").value;
  // If x is Not a Number or less than one or greater than 10
  let text = +a + +b;
  document.getElementById("demo").innerHTML = text;
}
function subOp() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    // If x is Not a Number or less than one or greater than 10
    let text = +a - +b;
    document.getElementById("demo").innerHTML = text;
  }
  function multOp() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    // If x is Not a Number or less than one or greater than 10
    let text = +a * +b;
    document.getElementById("demo").innerHTML = text;
  }
  function divOp() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    // If x is Not a Number or less than one or greater than 10
    let text = a / b;
    document.getElementById("demo").innerHTML = text;
  }

let button = document.getElementById("addItem");
let text = document.getElementById("addToList");
let ul = document.getElementById("shoppingList");
let shoppingListArray = [];

button.addEventListener("click", addShopping);

function addShopping() {
  let item = text.value;
  
  let errormsg = document.getElementById('error');

  if (shoppingListArray.includes(item)){
    alert("Item has already been added")
    
    // errormsg.innerHTML="Item has already been added!";
    return false;
  }
  else{
  console.log(item);
  shoppingListArray.push(item);
  }

  text.value="";
  let output = "";

  for (i = 0; i < shoppingListArray.length; i++) {
    output += "<li>" + shoppingListArray[i] + "</li>";
  }
  console.log(output);
  ul.innerHTML = output;
}
