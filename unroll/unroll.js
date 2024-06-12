function unroll(square) { 
  const result = []; 

  let startRow = 0,
    endRow = square.length - 1;
  let startCol = 0,
    endCol = square[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result.push(square[startRow][i]);
    }

    for (let i = startRow + 1; i <= endRow; i++) {
      result.push(square[i][endCol]);
    }

    if (startRow !== endRow) {
      for (let i = endCol - 1; i >= startCol; i--) {
        result.push(square[endRow][i]);
      }
    }

    if (startCol !== endCol) {
      for (let i = endRow - 1; i > startRow; i--) {
        result.push(square[i][startCol]);
      }
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }

  return result;
}

module.exports = unroll;
