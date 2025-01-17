
const container = document.querySelector(".container")
const body = document.querySelector("body");
const square = document.createElement("div");
square.classList.add("square");
square.textContent = " ";
square.style.borderStyle = "solid";
square.style.width ="50px";
square.style.height ="50px";

square.addEventListener("mouseover", changeColor);




function createGrid(aSize){ 
    container.style.width = "800px";
    container.style.height = "800px";
    square.style.flexGrow = "1"
for(let squareCount = 0; squareCount < aSize ; squareCount++){
    const clonedSquare =square.cloneNode(true);
    clonedSquare.addEventListener("mouseover", changeColor);
    container.appendChild(clonedSquare);
    for(let squareCount = 0; squareCount < aSize; squareCount++){
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

createGrid(10);
