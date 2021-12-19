// Playing with digits | 6° Kyu Kata | Solution

function digPow(n, p){
  let stringValue = n.toString();
  let len = stringValue.length;
  let resultFinal = 0;
  for(let i = 0; i < len ; i++) {
    let numberser = parseInt(stringValue.charAt(i),10);
    resultFinal +=  Math.pow(numberser, p + i)
  }
  let x = Math.pow(n,p);
  if(resultFinal === x){
    return p;
    } else if(resultFinal%n === 0) {
    return resultFinal / n;
  }else {
    return -1  
  }
}
