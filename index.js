function mouseOver(color) {
    document.body.style.background = color
    document.body.classList.add("out")
}

function mouseOut() {
    document.body.style.background = "linear-gradient(180deg, rgb(83, 13, 4) 0%, rgb(0, 0, 0) 35%)"
    document.body.classList.remove("out")
}