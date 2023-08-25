function createDivGrid(numGrid){
    let i = 1;
    numTiles = numGrid**2;
    while(i<numTiles+1){
        

        let newDiv = createTileElement();
        newDiv.classList.add(`tile${i}`);
        grids.appendChild(newDiv);
        // console.log(newDiv.classList.value);

        i++;
    }

    
}

function createTileElement(){
    const newDiv = document.createElement('div');
    newDiv.classList.add('tiles');
    
    return newDiv;
}

const container = document.querySelector('.container');
const grids = document.querySelector('.grids');
createDivGrid(5);
console.log(container); 
