let firstInput = document.getElementById('firstInput')
console.log(firstInput)
let secondInput = document.getElementById('secondInput')
console.log(secondInput)

function setCard() {
    let game = document.getElementById(firstInput.value);
    // game.style.color = secondInput.value;
    // let colors = document.getElementById(secondInput.vale).style.color = 'red'
    document.getElementById("hearts").style.color= "red"
    document.getElementById("diamonds").style.color= "red"
    document.getElementById("clubs").style.color= "black"
    document.getElementById("spades").style.color= "black"


};
