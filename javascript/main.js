//Getting grid container div
gridContainer = document.getElementById('grid-container');
//Collecting each div element that is inside the grid
const gridChildren = document.getElementsByClassName("gridChild")

let selectedColour = "";

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
  if (input > 100){
    return alert('Grid size too big')
  }else{
    makeGrid(input);
  }
    
} 

//Changing div colour on mouse over
let changeColour = (e) =>{
  //Each time this function is called it gets the value set inside the colour selector and then applies the colour to the bg
  let selectedColour = document.getElementById('color-selector').value
  let divToChange = e.target;
  divToChange.style.background=`${selectedColour}`;
}
//Clear style from div for clear button
let clearGrid = () =>{
    Array.from(gridChildren).forEach(child => child.style.background="azure");
}

