// Find the next perfect square | 7° Kyu | Solution

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if(Number.isInteger(Math.sqrt(sq))){
    return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1)
  } else {
    return -1;
  }
}
