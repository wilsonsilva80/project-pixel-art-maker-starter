// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    //initializations
    const grid = document.getElementById('pixelCanvas');
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWeight').value;
    // const fragment = document.createDocumentFragment();
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
const submitButton = document.getElementById('gridSubmit');
submitButton.addEventListener('click', function(evt){
    evt.preventDefault();
    makeGrid();
});
