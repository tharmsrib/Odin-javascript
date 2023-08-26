function createTileGrids(numGrid){
    let i = 1;
    numTiles = numGrid**2;
    //grid container
    grids.setAttribute('style',`grid-template-columns: repeat(${numGrid},1fr);`);

    while(i<numTiles+1){
        

        const newDiv = createTileElement();
        newDiv.classList.add(`tile${i}`);
        grids.appendChild(newDiv);
        // console.log(newDiv.classList.value);

        //add event listen to each tile for collor change
        newDiv.addEventListener('mouseover',changeTileColor);

        i++;
    }
}

function removeAllTiles(){
    //remove all childs of grids (tiles)
    while (grids.firstChild) {
        grids.removeChild(grids.lastChild);
    }
}
function createTileElement(){
    const newDiv = document.createElement('div');
    newDiv.classList.add('tiles');
    
    return newDiv;
}

function changeTileColor(e){
    e.target.classList.add('hoverTiles'); //or this.classList.add
    // console.log(this.classList);
}

function getGridSize(e){
    // console.log('hello');
    e.stopPropagation();
    //ask user for number
    let input = Number(prompt('enter grid size','number'));
    // console.log(input)
    if(!isNaN(input)||input!=0|| input>100){
        //remove all tiles
        removeAllTiles();

        //create new tiles
        getNumGrid = input;
        //grid container set grid size
        grids.setAttribute('style',`grid-template-columns: repeat(${getNumGrid},1fr);`);

        console.log('hello');
        createTileGrids(getNumGrid);

        
    }else{
        console.log('invalid input');
    }
    

}


const container = document.querySelector('.container');
const grids = document.querySelector('.grid');
const newGridButton = document.querySelector('.newGridButton');

//add event listeners

newGridButton.addEventListener('click',getGridSize);

let getNumGrid; //size of grid
createTileGrids(5);


