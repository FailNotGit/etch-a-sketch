
const container = document.querySelector(".container")
const body = document.querySelector("body");
const square = document.createElement("div");
square.classList.add("square");
square.textContent = " ";
square.style.borderStyle = "solid";
square.style.flexGrow = "1"
const squareHeight = square.style.flexGrow = "1"
square.style.height = "squareHeight";

square.addEventListener("mouseover", changeColor);




function createGrid(aSize){ 
    container.style.width = "800px";
    container.style.height = "800px"
    
    square.style.nthChild = aSize
for(let squareCount = 0; squareCount < aSize ; squareCount++){
    const clonedSquare =square.cloneNode(true);
    clonedSquare.addEventListener("mouseover", changeColor);
    container.appendChild(clonedSquare);
    for(let squareCount = 0; squareCount < aSize ; squareCount++){
        const clonedSquare =square.cloneNode(true);
        clonedSquare.addEventListener("mouseover", changeColor);
        container.appendChild(clonedSquare);
     
    }
}

}



function changeColor(event){
    event.target.style.backgroundColor = "black ";
}

function chooseSize() {
    
}
const button = document.createElement("button");

button.classList.add("button");
button.textContent = "Choose Size";
body.insertBefore(button, container);

createGrid(20);
