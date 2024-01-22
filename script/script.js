// Links to the DOM
const controlButtonBlack = document.querySelector(".black");
const controlButtonRainbow = document.querySelector(".rainbow");
const controlButtonErase = document.querySelector(".erase");
const controlButtonClear = document.querySelector(".clear");
const gridSketchContainer = document.querySelector("#sketch-grid");



// Dynamic DIV and GRID setup with square class
const makeDiv = () => {
    const div = document.createElement("div");
    div.classList.add("square")
    return div;
}

const makeGrid =() => {
    for (let i = 0 ; i < 10 ; i++){
        for (let j = 0 ; j < 10 ; j++){
        gridSketchContainer.appendChild(makeDiv());
        }
    }
}
makeGrid();



// Basic function to switch black hovering / clicking
const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.classList.add("on-black")
    })
})

controlButtonClear.addEventListener("click", () => {
    squares.forEach(square => {
        square.classList.remove("on-black")
    })
})