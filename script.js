let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]
let btn = document.querySelectorAll('.box')
let reset = document.querySelector('.reset')

let turn = 0;
for (let x of btn) {
    x.addEventListener('click', () => {
        if (x.innerText == "") {
            if (turn == 0) {
                x.innerText = 'x'
                turn = 1;
            }
            else {
                x.innerText = 'o'
                turn = 0;
            }
            checkWin()
        }
    })
}
let winpad = document.querySelector('.win');
let winnerr = document.querySelector('.winnerr');
let cont = document.querySelector('.container');
let newgame = document.querySelector('.new');

function checkWin() {
    for (let combo of win) {
        let [a, b, c] = combo;
        if (
            btn[a].innerText !== '' &&
            btn[a].innerText === btn[b].innerText &&
            btn[b].innerText === btn[c].innerText
        ) {
            winpad.style.display = 'block';
            winnerr.innerHTML = (`CONGRATULATIONS! <br/> The Winner is  "${btn[a].innerText.toUpperCase()}"`)
            cont.style.display = 'none'

        }
    }
}

reset.addEventListener('click', () => {
    for (let y of btn) {
        y.innerText = ''
    }
})
newgame.addEventListener('click', () => {
    winpad.style.display = 'none';
    cont.style.display = 'block'
    for (let y of btn) {
        y.innerText = ''
    }
})
