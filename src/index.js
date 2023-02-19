
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix == []) {
    return [];
  }
  for (let i = 0; i < matrix.length; i ++) {
    if ((i + 1) % 2 === 0) {
      matrix[i].reverse();
    }
    
    
  }
  return matrix.flat();
}


// let arr = [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ],
//  ]
console.log([] == undefined)