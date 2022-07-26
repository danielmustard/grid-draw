//Getting grid container div
gridContainer = document.getElementById('grid-container');
//Collecting each div element that is inside the grid
const gridChildren = document.getElementsByClassName("gridChild")

//Function that makes grid
let makeGrid = (size) =>{
    
    //Removing leftover div's from last time function ran
      let board = document.querySelector(".gridContainer");
      let squares = board.querySelectorAll('div');
      squares.forEach(div => div.remove());

    let amount = size * size; 
    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        gridContainer.appendChild(div);
        div.className = "gridChild";
        div.setAttribute('id', `gridChild${i}`)
        //Making grid set size
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
      }
      Array.from(gridChildren).forEach(child => child.addEventListener('mouseover',changeColour));
}

//function that makes new grid of size set by user
let changeSize = (input) => {
    makeGrid(input);
} 

//Changing div colour on mouse over
let changeColour = (e) =>{
      let divToChange = e.toElement;
      divToChange.style.background="black";      
}


//Clear style from div for clear button
let clearGrid = () =>{
    Array.from(gridChildren).forEach(child => child.style.background="white");
}