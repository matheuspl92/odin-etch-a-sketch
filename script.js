init();

function init(){
    createTopButton();
    createGrid(20);
    console.log('LOG: Page initialization complete')
}

function createTopButton(){
    let gridButton = document.createElement('button');
    gridButton.innerHTML = 'Change grid size';
    gridButton.onclick = () => console.log('LOG: Grid button clicked!');
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
            //pixelDiv.textContent = `${i+1}:${j+1}`;
            rowDiv.appendChild(pixelDiv);
            console.log(`LOG: PIXEL ${i+1}:${j+1} created!`)
        }
        containerGrid.appendChild(rowDiv);
    }
    document.body.appendChild(containerGrid);
}