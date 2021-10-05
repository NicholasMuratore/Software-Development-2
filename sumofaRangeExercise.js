function range (start, end, step){
  var rangeArray = [];
  if (step === undefined) step = 1;
  var larger = Math.max(start, end);
  var smaller = Math.min(start, end);
  if (step < 0) {
  	for (var i = larger; i >= smaller; i+=step){
        rangeArray.push(i);
      }
  } else {
    for (var i = smaller; i <= larger; i+=step){
      rangeArray.push(i);
    }
  }
  return rangeArray;
}

function sum (arr){
  var arrSum = 0;
  for (var i = 0; i<arr.length; i++){
  arrSum += arr[i];
  }
  return arrSum;
}
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));