
//Getting grid container div
gridContainer = document.getElementById('grid-container');

const gridChildren = document.getElementsByClassName("gridChild")



console.log(gridChildren);

let makeGrid = () =>{
    for (let i = 1; i < 257; i++) {
        const div = document.createElement("div");
        gridContainer.appendChild(div);
        div.className = "gridChild";
        div.setAttribute('id', `gridChild${i}`)
      }
}

window.onload = makeGrid();

//Changing div colour on mouse over
let changeColour = (e) =>{
      let divToChange = e.toElement;
      divToChange.style.background="black";      
}

//Adding event listener to each div 
Array.from(gridChildren).forEach(child => child.addEventListener('mouseover',changeColour));

//Clear style from div for clear button
let clearGrid = () =>{
    Array.from(gridChildren).forEach(child => child.style.background="white");
}

//Size of Grid Slider
document.getElementById("gridSize").addEventListener('input', (e) =>{
    console.log(e.target.value);
});
