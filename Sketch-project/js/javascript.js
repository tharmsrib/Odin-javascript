function createDivGrid(numGrid){
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

function createTileElement(){
    const newDiv = document.createElement('div');
    newDiv.classList.add('tiles');
    
    return newDiv;
}

function changeTileColor(e){
    e.target.classList.add('hoverTiles'); //or this.classList.add
    // console.log(this.classList);
}




const container = document.querySelector('.container');
const grids = document.querySelector('.grid');
let numGrid; //size of grid
createDivGrid(5);
console.log(container); 

const newGridButton = document.querySelector('.newGridButton');
newGridButton.addEventListener('click',function(){
    console.log('hello');
    //ask user for number
})

