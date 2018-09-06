let canvas = document.getElementById("canvas");
let video = document.getElementById("video");
let ctx = canvas.getContext("2d");




let list = [
    { time: 1, x: 1, y: 1, w: 10, h: 10 },
    { time: 3, x: 15, y: 15, w: 20, h: 20 },
    { time: 5, x: 50, y: 50, w: 10, h: 10 }
]
let t = 0;
window.onload = function () {
    ctx.strokeStyle = "red";
    setInterval(() => {
        draw();
        t++;
    }, 1000)
}


draw = () => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].time == t) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.rect(list[i].x, list[i].y, list[i].w, list[i].h);
            ctx.stroke();
        }
    }
}