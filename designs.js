// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    //initializations
    // const grid = document.getElementById('pixelCanvas');
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWeight').value;

    //Delete the previous grid
    emptyGrid(grid);

    //create rows
    for(let i = 0; i < height; i++){
        const row = document.createElement('tr'); //new element
        grid.appendChild(row);
        //create columns
        for(let j = 0; j < width; j++){
            const col = document.createElement('td');
            row.appendChild(col);
        }
    }
}

//Empty the grid of all child
function emptyGrid(element){
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

//add event listener to the submit button
const submitButton = document.getElementById('gridSubmit');
submitButton.addEventListener('click', function(evt){
    evt.preventDefault();
    makeGrid();
});

//add event listener to the table and create a painting function
const grid = document.getElementById('pixelCanvas');
grid.addEventListener('click', function(evt){
    evt.preventDefault();
    const colorP = document.getElementById('colorPicker').value;
    //prevent painting the whole row or table
    if(evt.target.tagName.toLowerCase() == 'td') (evt.target).style.backgroundColor = colorP;
});
