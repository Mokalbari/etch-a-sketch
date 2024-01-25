// Links to the DOM
const controlButtonBlack = document.querySelector(".black");
const controlButtonRainbow = document.querySelector(".rainbow");
const controlButtonErase = document.querySelector(".erase");
const controlButtonClear = document.querySelector(".clear");
const gridSketchContainer = document.querySelector("#sketch-grid");
const userGridSelection = document.querySelector("#grid-selection");

//The value from the user input is stored in a variable.
//Every time the input changes, the value is changed.
//The value is used to modify the class while creating the div.
//The value is used to modify the gridsize.
//Everytime the input is modified the grid changes.


let gridSize = +userGridSelection.value
userGridSelection.addEventListener("input", () => {
    gridSize = +userGridSelection.value;
    makeGrid(gridSize)
});

// Dynamic DIV and GRID setup with square class
const makeDiv = () => {
    const div = document.createElement("div")
    div.addEventListener("mouseover", () => {
        const squares = document.querySelectorAll(".square-10");
        squares.forEach(square => {
            square.addEventListener("mouseover", () => {
                if (isRainbowMode===true){
                    square.classList.add("on-rainbow")
                    square.classList.remove("on-black")
                } else {
                    square.classList.add("on-black")
                    square.classList.remove("on-rainbow")
                }
            })
        })
    })
    if (gridSize===10){
        div.classList.add("square-10");
        div.classList.remove("square-50");
        div.classList.remove("square-100");
        return div;
    } else if (gridSize===50){
        div.classList.remove("square-10");
        div.classList.add("square-50");
        div.classList.remove("square-100");
        return div;
    } else if (gridSize===100){
        div.classList.remove("square-10");
        div.classList.remove("square-50");
        div.classList.add("square-100");
        return div;
    }
}

const makeGrid = (value) => {
    for (let i = 0 ; i < value ; i++){
        for (let j = 0 ; j < value ; j++){
        gridSketchContainer.appendChild(makeDiv());
        }
    }
}

makeGrid(gridSize);

//Track of boolean value for buttons
let isRainbowMode=false;
let isBlackMode=true;

controlButtonRainbow.addEventListener("click", () => {
    isRainbowMode=true;
    isBlackMode=false;
})

controlButtonBlack.addEventListener("click", () => {
    isBlackMode=true;
    isRainbowMode=false;
})


// Function to switch black hovering / clicking
let squares
makeDiv.addEventListener("change", () => {
    if (gridSize===10){
        squares = document.querySelectorAll(".square-10");
        squares.forEach(square => {
            square.addEventListener("mouseover", () => {
                if (isRainbowMode===true){
                    square.classList.add("on-rainbow")
                    square.classList.remove("on-black")
                } else {
                    square.classList.add("on-black")
                    square.classList.remove("on-rainbow")
                }
            })
        })
    } else if (gridSize===50) {
        squares = document.querySelectorAll(".square-50");
        squares.forEach(square => {
            square.addEventListener("mouseover", () => {
                if (isRainbowMode===true){
                    square.classList.add("on-rainbow")
                    square.classList.remove("on-black")
                } else {
                    square.classList.add("on-black")
                    square.classList.remove("on-rainbow")
                }
            })
        })
    } else if (gridSize===100) {
        squares = document.querySelectorAll(".square-100");
        squares.forEach(square => {
            square.addEventListener("mouseover", () => {
                if (isRainbowMode===true){
                    square.classList.add("on-rainbow")
                    square.classList.remove("on-black")
                } else {
                    square.classList.add("on-black")
                    square.classList.remove("on-rainbow")
                }
            })
        })
    }
})







// squares = document.querySelectorAll(".square-10");
// squares.forEach(square => {
//     square.addEventListener("mouseover", () => {
//         if (isRainbowMode===true){
//             square.classList.add("on-rainbow")
//             square.classList.remove("on-black")
//         } else {
//             square.classList.add("on-black")
//             square.classList.remove("on-rainbow")
//         }
//     })
// })

controlButtonClear.addEventListener("click", () => {
    squares.forEach(square => {
        square.classList.remove("on-black");
        square.classList.remove("on-rainbow");
    })
})