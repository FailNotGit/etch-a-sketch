
const container = document.querySelector(".container")
const body = document.querySelector("body");
const square = document.createElement("div");
square.classList.add("square");

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";
container.style.margin = "0";
container.style.padding = "0";


square.style.border = "1px solid black";
square.style.boxSizing = "border-box"; 
square.style.width = "50px"; 
square.style.height = "50px"; 
square.style.paddingBottom = "0";
square.style.flexShrink = "0";


function createGrid(aSize){ 
container.textContent = "";
const squareSize = container.offsetWidth / aSize; 
for(let squareCount = 0; squareCount < aSize * aSize; squareCount++){
    const square = document.createElement("div");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.boxSizing = "border-box";
    square.style.border = "1px solid black";
    square.style.flexShrink = "0"; // Prevent shrinking in flexbox
    square.addEventListener("mouseover", changeColor);
    container.appendChild(square);
}

}



function changeColor(event){
    event.target.style.backgroundColor = "black ";
}


const button = document.createElement("button");

button.classList.add("button");
button.textContent = "Choose Size";
body.insertBefore(button, container);
button.addEventListener("click", initializeGrid);



function initializeGrid() {
    const gridSize = prompt("Enter the grid size (e.g., 16 for a 16x16 grid):", "16");
    const size = parseInt(gridSize, 10);
    createGrid(size);


}

createGrid(16);