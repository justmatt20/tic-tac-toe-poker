let idInput = document.getElementById('idInput')
console.log(idInput)
let colorInput = document.getElementById('colorInput')
console.log(colorInput)

//picks each card based on color and suit
// function setCard() {
//     let game = document.getElementById(idInput.value);
//     // game.style.color = colorInput.value;
//     // let colors = document.getElementById(colorInput.vale).style.color = 'red'
//     // document.getElementById("hearts").style.color= "red"
//     // document.getElementById("diamonds").style.color= "red"
//     // document.getElementById("clubs").style.color= "black"
//     // document.getElementById("spades").style.color= "black"
// if ( document.getElementById("hearts").style.color= "red") {
//     return setCard()
//     }else if (document.getElementById("diamonds").style.color= "red") {
// return setCard()
//     }else if (document.getElementById("clubs").style.color= "black") {
//         return setCard()
//     }else{
//         return setCard(document.getElementById("spades").style.color= "black")
//     }

// };
function setCard () {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}