// Link to the DOM 
const colorButtonBlack = document.querySelector(".black");
const colorButtonRainbow = document.querySelector(".rainbow");
const colorButtonErase = document.querySelector(".erase");
const ButtonClear = document.querySelector(".clear");
const gridSketchContainer = document.querySelector("#sketch-grid");
const getUserGridSize = document.querySelector("#grid-selection");

// Select a grid option. (By default, the grid option is 10 * 10)
// When the user selects the grid option, the value is used to create a div.

let gridSize = 10;
const updateGridSize = () => {
    gridSize = +getUserGridSize.value
    console.log(`the grid size is ${gridSize}`)
}
getUserGridSize.addEventListener("change", updateGridSize)

// There a 3 Color Control Buttons = Black, Rainbow, Blank
// Track Color Control Button with AEL
// Store the value of Color Control button
let trackColor = "black"
colorButtonBlack.addEventListener("click", () => {
    trackColor="black"
})
colorButtonRainbow.addEventListener("click", () => {
    trackColor="rainbow";
})
colorButtonErase.addEventListener("click", () => {
    trackColor="blank"
})


// The div has an AEL that tracks mouseover movements.
// // When the mouse moves in / out of a div
// // // add a class depending on control button boolean state 
// // // If the rainbow button is true then add on-rainbow class
// // // Else leave it as black
const makeDiv = () => {
    const div = document.createElement("div");
    if (gridSize===10){
        div.classList.add("square-10")
    } else if (gridSize===50){
        div.classList.add("square-50")
    } else if (gridSize===100){
        div.classList.add("square-100")
    }
    div.addEventListener("mouseover", () => {
        if (trackColor==="black"){
            div.classList.add("on-black");
            div.classList.remove("on-rainbow");
        } else if (trackColor==="rainbow"){
            div.classList.remove("on-black");
            div.classList.add("on-rainbow");
        } else if (trackColor==="blank"){
            div.classList.remove("on-black");
            div.classList.remove("on-rainbow");
        } else {
            div.classList.add("on-black");
            div.classList.remove("on-rainbow");
        }
    });
    return div;
}


// The div is appended to the sketch container with a grid function.
// // When the grid size is updated by the user
// // // Remove pre-existing grid
// // // Make a new grid with new value.
const makeGrid = (value) => {
    gridSketchContainer.innerHTML = '';
    for (let i = 0; i < value; i++) {
        for (let j = 0; j < value; j++) {
            gridSketchContainer.appendChild(makeDiv());
        }
    }
};

getUserGridSize.addEventListener("change", () => {
    const newSize = +getUserGridSize.value;
    makeGrid(newSize);
});




// When "Clear" is clicked
// // Switch div back to initial state