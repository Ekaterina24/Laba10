let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

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