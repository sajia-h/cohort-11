// let clarkImage = document.getElementById("clark");
// function superMan() {
//     // document.getElementById('help').innerHTML="We need Clark Kent"
//     // document.getElementById('clark').src= "https://www.giantfreakinrobot.com/wp-content/uploads/2020/08/smallville-900x900.jpg";
//     if (clarkImage.src == "https://preview.redd.it/kahckouorzo01.jpg?auto=webp&s=bbf0fc0cb1658af6be89d14fc0168be4217099d3"){
//         clarkImage.src = "https://www.giantfreakinrobot.com/wp-content/uploads/2020/08/smallville-900x900.jpg";
//         document.getElementById('help').innerHTML="We need Clark Kent"
//     } else {
//         clarkImage.src == "https://preview.redd.it/kahckouorzo01.jpg?auto=webp&s=bbf0fc0cb1658af6be89d14fc0168be4217099d3";
//     }
// }

// clarkImage.addEventListener('click', superMan);
  
let colorImage = document.getElementById("clark");


function changeToSM() {
    if (colorImage.src == "https://preview.redd.it/kahckouorzo01.jpg?auto=webp&s=bbf0fc0cb1658af6be89d14fc0168be4217099d3"){
                colorImage.src = "https://upload.wikimedia.org/wikipedia/en/f/f6/SmallvilleCK.jpg";
                document.getElementById('help').innerHTML="We need Clark Kent"
            } else {
                colorImage.src = "https://preview.redd.it/kahckouorzo01.jpg?auto=webp&s=bbf0fc0cb1658af6be89d14fc0168be4217099d3";
                document.getElementById('help').innerHTML="We need Superman";
            }}
colorImage.addEventListener("click", changeToSM);


