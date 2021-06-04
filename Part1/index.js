const turns = []

function play (id) {
    const clicked = document.getElementById('player')
    const player = document.getElementById(id)
    if (clicked.innerText === 'X') {
        clicked.innerText = 'O';
        player.innerText = 'X';
        turns.clicked = 'X'
    }else {
        clicked.innerText = 'X'
        player.innerText = 'O'
        turns.clicked = 'O'
    }
    console.log(turns)
}

