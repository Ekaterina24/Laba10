let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

const buttonNewRound = document.querySelector('#new')
const buttonReset = document.querySelector('#reset')
let firstPlayerWins = document.querySelector('#firstPlayer')
let secondPlayerWins = document.querySelector('#secondPlayer')
let motion = document.querySelector('#motion')

//.....................................................................

function x_OO() {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(20, 20)
    ctx.lineTo(120, 120)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(120, 20)
    ctx.lineTo(20, 120)
    ctx.stroke()
}
function x_O1() {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(160, 20)
    ctx.lineTo(260, 120)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(260, 20)
    ctx.lineTo(160, 120)
    ctx.stroke()
}
function x_O2() {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(300, 20)
    ctx.lineTo(400, 120)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(400, 20)
    ctx.lineTo(300, 120)
    ctx.stroke()
}

function x_1O() {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(20, 160)
    ctx.lineTo(120, 260)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(120, 160)
    ctx.lineTo(20, 260)
    ctx.stroke()
}
function x_11() {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(160, 160)
    ctx.lineTo(260, 260)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(260, 160)
    ctx.lineTo(160, 260)
    ctx.stroke()
}
function x_12() {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(300, 160)
    ctx.lineTo(400, 260)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(400, 160)
    ctx.lineTo(300, 260)
    ctx.stroke()
}

function x_2O() {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(20, 300)
    ctx.lineTo(120, 400)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(120, 300)
    ctx.lineTo(20, 400)
    ctx.stroke()
}
function x_21() {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(160, 300)
    ctx.lineTo(260, 400)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(260, 300)
    ctx.lineTo(160, 400)
    ctx.stroke()
}
function x_22() {
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(300, 300)
    ctx.lineTo(400, 400)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.moveTo(400, 300)
    ctx.lineTo(300, 400)
    ctx.stroke()
}


function nul_OO() {
    ctx.beginPath()
    ctx.arc(70, 70, 55, 0, 360)
    ctx.stroke()
}
function nul_O1() {
    ctx.beginPath()
    ctx.arc(210, 70, 55, 0, 360)
    ctx.stroke()
}
function nul_O2() {
    ctx.beginPath()
    ctx.arc(350, 70, 55, 0, 360)
    ctx.stroke()
}

function nul_1O() {
    ctx.beginPath()
    ctx.arc(70, 210, 55, 0, 360)
    ctx.stroke()
}
function nul_11() {
    ctx.beginPath()
    ctx.arc(210, 210, 55, 0, 360)
    ctx.stroke()
}
function nul_12() {
    ctx.beginPath()
    ctx.arc(350, 210, 55, 0, 360)
    ctx.stroke()
}

function nul_2O() {
    ctx.beginPath()
    ctx.arc(70, 350, 55, 0, 360)
    ctx.stroke()
}
function nul_21() {
    ctx.beginPath()
    ctx.arc(210, 350, 55, 0, 360)
    ctx.stroke()
}
function nul_22() {
    ctx.beginPath()
    ctx.arc(350, 350, 55, 0, 360)
    ctx.stroke()
}

//........................................................

let arr = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
let count = 0
ctx.lineWidth = 5;

function canvasCascade() {

    ctx.fillStyle = "black"
    ctx.fillRect(139, 0, 3, 420)
    ctx.fillStyle = "black"
    ctx.fillRect(279, 0, 3, 420)

    ctx.fillStyle = "black"
    ctx.fillRect(0, 139, 420, 3)
    ctx.fillStyle = "black"
    ctx.fillRect(0, 279, 420, 3)
}
canvasCascade()

//..............................................................................

canvas.addEventListener('click', canvasClick)
let clientX = 0
let clientY = 0

let player1 = 0
let player2 = 0

let gameStopper = false
let currentPlayer = 0
let winner = 'first'

const playerFirstName = prompt('Введите имя первого игрока: ')
const playerSecondName = prompt('Введите имя второго игрока: ')

motion.textContent = `Ходит первый игрок - ${playerFirstName}`

function canvasClick(click) {
    X = click.offsetX;
    Y = click.offsetY;
    Text()

    if (gameStopper == false) {
        if (X < 139 && Y < 139 && arr[0][0] != 'X' && arr[0][0] != 'O') {
            if (currentPlayer % 2 == 0) {
                x_OO()
                arr[0][0] = 'X'
            } else {
                nul_OO()
                arr[0][0] = 'O'
            }
            currentPlayer += 1
        } else if (X < 279 && Y < 139 && X > 140 && Y > 0 && arr[0][1] != 'X' && arr[0][1] != 'O') {
            if (currentPlayer % 2 == 0) {
                Text()
                x_O1()
                arr[0][1] = 'X'
            } else {
                Text()
                nul_O1()
                arr[0][1] = 'O'
            }
            currentPlayer += 1
        } else if (X < 420 && Y < 139 && X > 280 && Y > 0 && arr[0][2] != 'X' && arr[0][2] != 'O') {
            if (currentPlayer % 2 == 0) {
                x_O2()
                arr[0][2] = 'X'
            } else {
                nul_O2()
                arr[0][2] = 'O'
            }
            currentPlayer += 1
        } else if (X < 139 && Y < 279 && X > 0 && Y > 140 && arr[1][0] != 'X' && arr[1][0] != 'O') {
            if (currentPlayer % 2 == 0) {
                x_1O()
                arr[1][0] = 'X'
            } else {
                nul_1O()
                arr[1][0] = 'O'
            }
            currentPlayer += 1
        } else if (X < 279 && Y < 279 && X > 140 && Y > 140 && arr[1][1] != 'X' && arr[1][1] != 'O') {
            if (currentPlayer % 2 == 0) {
                x_11()
                arr[1][1] = 'X'
            } else {
                nul_11()
                arr[1][1] = 'O'
            }
            currentPlayer += 1
        } else if (X < 420 && Y < 279 && X > 280 && Y > 140 && arr[1][2] != 'X' && arr[1][2] != 'O') {
            if (currentPlayer % 2 == 0) {
                x_12()
                arr[1][2] = 'X'
            } else {
                nul_12()
                arr[1][2] = 'O'
            }
            currentPlayer += 1
        } else if (X < 139 && Y < 420 && X > 0 && Y > 280 && arr[2][0] != 'X' && arr[2][0] != 'O') {
            if (currentPlayer % 2 == 0) {
                x_2O()
                arr[2][0] = 'X'
            } else {
                nul_2O()
                arr[2][0] = 'O'
            }
            currentPlayer += 1
        } else if (X < 279 && Y < 420 && X > 140 && Y > 280 && arr[2][1] != 'X' && arr[2][1] != 'O') {
            if (currentPlayer % 2 == 0) {
                x_21()
                arr[2][1] = 'X'
            } else {
                nul_21()
                arr[2][1] = 'O'
            }
            currentPlayer += 1
        } else if (X < 420 && Y < 420 && X > 280 && Y > 280 && arr[2][2] != 'X' && arr[2][2] != 'O') {
            if (currentPlayer % 2 == 0) {
                x_22()
                arr[2][2] = 'X'
            } else {
                nul_22()
                arr[2][2] = 'O'
            }
            currentPlayer += 1
        } else {
            alert('Это поле уже занято, выберите путое поле!')
        }
        Win()
    }

    draw()
}

function Win() {

    if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
        if (arr[0][0] == 'X') {
            if (winner == 'first') {
                player1 += 1
                firstWinFunc()
            } else if (winner == 'second') {
                player2 += 1
                secondWinFunc()
            }
            gameStopper = true
        } else if (arr[0][0] == 'O') {
            if (winner == 'first') {
                player2 += 1
                secondWinFunc()
            } else if (winner == 'second') {
                player1 += 1
                firstWinFunc()
            }
            gameStopper = true
        }

    } else if (arr[0][0] == arr[0][1] && arr[0][2] == arr[0][1]) {
        if (arr[0][0] == 'X') {
            if (winner == 'first') {
                player1 += 1
                firstWinFunc()
            } else if (winner == 'second') {
                player2 += 1
                secondWinFunc()
            }
            gameStopper = true
        } else if (arr[0][0] == 'O') {
            if (winner == 'first') {
                player2 += 1
                secondWinFunc()
            } else if (winner == 'second') {
                player1 += 1
                firstWinFunc()
            }
            gameStopper = true
        }

    } else if (arr[1][0] == arr[1][1] && arr[1][2] == arr[1][1]) {
        if (arr[1][0] == 'X') {
            if (winner == 'first') {
                player1 += 1
                firstWinFunc()
            } else if (winner == 'second') {
                player2 += 1
                secondWinFunc()
            }
            gameStopper = true
        } else if (arr[1][0] == 'O') {
            if (winner == 'first') {
                player2 += 1
                secondWinFunc()
            } else if (winner == 'second') {
                player1 += 1
                firstWinFunc()
            }
            gameStopper = true
        }

    } else if (arr[2][0] == arr[2][1] && arr[2][2] == arr[2][1]) {
        if (arr[2][0] == 'X') {
            if (winner == 'first') {
                player1 += 1
                firstWinFunc()
            } else if (winner == 'second') {
                player2 += 1
                secondWinFunc()
            }
            gameStopper = true
        } else if (arr[2][0] == 'O') {
            if (winner == 'first') {
                player2 += 1
                secondWinFunc()
            } else if (winner == 'second') {
                player1 += 1
                firstWinFunc()
            }
            gameStopper = true
        }

    } else if (arr[0][2] == arr[1][1] && arr[2][0] == arr[1][1]) {
        if (arr[0][2] == 'X') {
            if (winner == 'first') {
                player1 += 1
                firstWinFunc()
            } else if (winner == 'second') {
                player2 += 1
                secondWinFunc()
            }
            gameStopper = true
        } else if (arr[0][2] == 'O') {
            if (winner == 'first') {
                player2 += 1
                secondWinFunc()
            } else if (winner == 'second') {
                player1 += 1
                firstWinFunc()
            }
            gameStopper = true
        }

    } else if (arr[0][0] == arr[1][0] && arr[2][0] == arr[1][0]) {
        if (arr[0][0] == 'X') {
            if (winner == 'first') {
                player1 += 1
                firstWinFunc()
            } else if (winner == 'second') {
                player2 += 1
                secondWinFunc()
            }
            gameStopper = true
        } else if (arr[0][0] == 'O') {
            if (winner == 'first') {
                player2 += 1
                secondWinFunc()
            } else if (winner == 'second') {
                player1 += 1
                firstWinFunc()
            }
            gameStopper = true
        }

    } else if (arr[0][1] == arr[1][1] && arr[2][1] == arr[1][1]) {
        if (arr[0][1] == 'X') {
            if (winner == 'first') {
                player1 += 1
                firstWinFunc()
            } else if (winner == 'second') {
                player2 += 1
                secondWinFunc()
            }
            gameStopper = true
        } else if (arr[0][1] == 'O') {
            if (winner == 'first') {
                player2 += 1
                secondWinFunc()
            } else if (winner == 'second') {
                player1 += 1
                firstWinFunc()
            }
            gameStopper = true
        }

    } else if (arr[0][2] == arr[1][2] && arr[2][2] == arr[1][2]) {
        if (arr[0][2] == 'X') {
            if (winner == 'first') {
                player1 += 1
                firstWinFunc()
            } else if (winner == 'second') {
                player2 += 1
                secondWinFunc()
            }
            gameStopper = true
        } else if (arr[0][2] == 'O') {
            if (winner == 'first') {
                player2 += 1
                secondWinFunc()
            } else if (winner == 'second') {
                player1 += 1
                firstWinFunc()
            }
            gameStopper = true
        }
    }
}

function draw() {
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            if (arr[i][j] == '') {
                count += 1
            }
        }
    }
    if (count == 0) {

        let result = document.getElementById('result');
        result.innerHTML = "<span id='gamer'></span>";
        let gamer = document.getElementById('gamer');
        gamer.innerHTML = 'Ничья!'
    }
    console.log(count)
    count = 0
}

function Text() {
    if (winner == 'first') {
        if (currentPlayer % 2 == 1) {
            motion.textContent = `Ходит первый игрок - ${playerFirstName}`
        } else if (currentPlayer % 2 == 0) {
            motion.textContent = `Ходит второй игрок - ${playerSecondName}`
        }
    } else if (winner == 'second') {
        if (currentPlayer % 2 == 0) {
            motion.textContent = `Ходит первый игрок - ${playerFirstName}`
        } else if (currentPlayer % 2 == 1) {
            motion.textContent = `Ходит второй игрок - ${playerSecondName}`
        }
    }
}

function firstWinFunc() {
    winner = 'first'
    count = 0
    firstPlayerWins.textContent = `Первый игрок: ${player1}`
    motion.textContent = `Ходит первый игрок - ${playerFirstName}`
    let result = document.getElementById('result');
    result.innerHTML = "<span id='gamer'></span>";
    let gamer = document.getElementById('gamer');
    gamer.innerHTML = 'Первый игрок выиграл.'
}

function secondWinFunc() {
    winner = 'second'
    count = 0
    secondPlayerWins.textContent = `Второй игрок: ${player2}`
    motion.textContent = `Ходит второй игрок - ${playerSecondName}`
    let result = document.getElementById('result');
    result.innerHTML = "<span id='gamer'></span>";
    let gamer = document.getElementById('gamer');
    gamer.innerHTML = 'Второй игрок выиграл.'
}


buttonNewRound.addEventListener('click', () => {
    ctx.clearRect(0, 0, 420, 420)
    canvasCascade()
    result.innerHTML = "";
    arr = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    currentPlayer = 0
    count = 0
    gameStopper = false
})

buttonReset.addEventListener('click', () => {
    ctx.clearRect(0, 0, 420, 420)
    canvasCascade()
    arr = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    currentPlayer = 0
    count = 0
    winner = 'first'
    gameStopper = false
    player1 = 0
    player2 = 0
    motion.textContent = `Ходит первый игрок - ${playerFirstName}`
    firstPlayerWins.textContent = `Первый игрок: ${player1}`
    secondPlayerWins.textContent = `Второй игрок: ${player2}`
    result.innerHTML = "";
})


