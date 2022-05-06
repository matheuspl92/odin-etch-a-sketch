init();

function init(){
    createTopButton();
    console.log('LOG: Page initialization complete')
}

function createTopButton(){
    let gridButton = document.createElement('button');
    gridButton.innerHTML = 'Change grid size';
    gridButton.onclick = () => console.log('LOG: Grid button clicked!');
    document.body.appendChild(gridButton);
}