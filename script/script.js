// Links to the DOM
const controlButtonBlack = document.querySelector(".black");
const controlButtonRainbow = document.querySelector(".rainbow");
const controlButtonErase = document.querySelector(".erase");
const controlButtonClear = document.querySelector(".clear");
const gridSketchContainer = document.querySelector("#sketch-grid");

// Two loop to create a 10*10 grid with DIV inside the gridSketchContainer.
const makeGrid =() => {
    for (let i = 0 ; i < 10 ; i++){
        for (let j = 0 ; j < 10 ; j++){
        const squareDiv = document.createElement("div");
        squareDiv.setAttribute("class", "square");
        gridSketchContainer.appendChild(squareDiv);
        }
    }
}

makeGrid();

