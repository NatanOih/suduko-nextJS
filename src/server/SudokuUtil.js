import { Util } from "./Util.js";

const SudokuUtil ={

    isValidPuzzle: (grid) => {
        for(let i = 0 ; i< grid.length ; i++){
            if(!isValidRow(grid, i)){
                return false;
            }
            if (!isValidCol(grid, i)){
                return false;
            }
        }
        if (!isValidBox(grid)) {
            return false;
        }
        return true;
    },

    isValidPlace :  (grid, row, col , guess) => {
        for (let i=0; i<9; i++) {
            if (grid[i][col] === guess){
                return false
            };
        }    
        
        for (let i=0; i<9; i++) {
            if (grid[row][i] === guess){
                return false
            };
        }
    
        let localBoxRow = row - ( row % 3) ;
        let localBoxCol = col - ( col % 3) ;
    
        for (let i=localBoxRow; i < localBoxRow + 3 ; i++){
            for (let j=localBoxCol; j < localBoxCol + 3 ; j++){
                if (grid[i][j] === guess){
                    return false;
                }
            }
        }
    
        return true;
    },
};

const isValidRow = (grid, row) => {
    let  set = new Set();
    for ( let i = 0 ; i < 9 ; i++){
        let number = grid[row][i];
        if ( number < 0 || number > 9){
            return false;
        }
        if(set.has(number)){
            return false
        } else {
            number !==0 && set.add(number);
        }
    }
    return true;
};

const isValidCol = (grid, col) => {
    let set = new Set();
    for ( let i = 0 ; i < 9 ; i++){
        let number = grid[i][col];
        if ( number < 0 || number > 9){
            return false;
        }
        if(set.has(number)){
            return false
        } else {
            number !==0 && set.add(number);
        }
    }
    return true;
};

const isValidBox = (grid) => {
    for (let row = 0; row < grid.length; row += 3) {
      for (let column = 0; column < grid.length; column += 3) {
        let set = new Set();
        for (let subRow = 0; subRow < 3; subRow++) {
          for (let subCol = 0; subCol < 3; subCol++) {
            let number = grid[subRow][subCol];
            if (number < 0 || number > 9) {
              return false;
            }
            if (set.has(number)) {
              return false;
            } else {
              number !== 0 && set.add(number);
            }
          }
        }
      }
    }
    return true;
  };


export { SudokuUtil };
