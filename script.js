const colorList = ["#ffb6c1","#ffcccb","#ffd700","#98fb98","#add8e6","#dda0dd","#ffefd5","#faebd7","#a9a9a9","#f0e68c"];

function pickColor(colorList){
    const randomIndex = Math.floor(Math.random() * colorList.length);
    return colorList[randomIndex];
}

function changeColor() {
    const elem = document.body;
    elem.style.backgroundColor = pickColor(colorList);
}

changeColor()
setInterval(changeColor, 3000)
