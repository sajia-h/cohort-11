function validateNum() {
    let x = Number;
    let check = document.forms["myForm"]["number"].value;
    
    if (check == ""); {
    alert("Please enter a number");
    return false;
    }

    if (x != Number); {
        alert("Your input should be a number");
        return false;
        }
}