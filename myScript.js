
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

const button = document.createElement("button");

button.classList.add("button");
button.textContent = "Choose Size";
body.insertBefore(button, container);
button.addEventListener("click", createGrid);





function createGrid(){ 
container.textContent = "";
let aSize = prompt("Pick a grid size: ");
const squareSize = container.offsetWidth / aSize; 
for(let squareCount = 0; squareCount < aSize * aSize; squareCount++){
    const clonedSquare = square.cloneNode(true);
    clonedSquare.style.width - `${squareSize}px`;
    clonedSquare.style.height - `${squareSize}px`;
    clonedSquare.addEventListener("mouseover", changeColor);
    container.appendChild(clonedSquare);
}

}



function changeColor(event){
    event.target.style.backgroundColor = "black ";
}



function initializeGrid(20) {

    for(let squareCount = 0; squareCount < aSize * aSize; squareCount++){
        const clonedSquare = square.cloneNode(true);
        clonedSquare.style.width - `${squareSize}px`;
        clonedSquare.style.height - `${squareSize}px`;
        clonedSquare.addEventListener("mouseover", changeColor);
        container.appendChild(clonedSquare);
    }

}

initializeGrid()