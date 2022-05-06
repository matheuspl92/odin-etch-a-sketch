init();

function init(){
    createTopButton();
    createGrid();
    console.log('LOG: Page initialization complete')
}

function createTopButton(){
    let gridButton = document.createElement('button');
    gridButton.innerHTML = 'Change grid size';
    gridButton.onclick = () => changeGrid();
    document.body.appendChild(gridButton);
}

function createGrid(size = 16){
    let containerGrid = document.createElement('div');
    containerGrid.className = 'container';

    for(let i = 0; i < size; i++){
        let rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        for(let j = 0; j < size; j++){
            let pixelDiv = document.createElement('div');
            pixelDiv.className = 'pixel';
            pixelDiv.addEventListener('mouseover', event => changeColor(event))
            rowDiv.appendChild(pixelDiv);
            console.log(`LOG: PIXEL ${i+1}:${j+1} created!`)
        }
        containerGrid.appendChild(rowDiv);
    }
    document.body.appendChild(containerGrid);
}

function changeGrid(){
    let size = Number.parseInt(prompt('Insert a new number of cells to the grid side. (Only integers and values equal or below 100)'));
    if(!size || size >100){return changeGrid();}
    deleteGrid();
    createGrid(size);
}

function deleteGrid(){
    const divs = document.querySelectorAll('div');
    divs.forEach(div => div.remove());
}

function changeColor(event){

    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    event.target.style.backgroundColor = color;
}