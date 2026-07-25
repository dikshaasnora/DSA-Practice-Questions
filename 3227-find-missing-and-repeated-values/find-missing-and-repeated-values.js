/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length;
    let total = n*n;
    let freq = new Array(total+1).fill(0);
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            let num=grid[i][j]
            freq[num]=freq[num]+1
        }
    }
    let a=0;
    let b=0;
    for(let num=1;num<=total;num++){
        if(freq[num]===2){
            a=num;
        }
        if(freq[num]===0){
            b=num;
        }
    }
    return[a,b];
};