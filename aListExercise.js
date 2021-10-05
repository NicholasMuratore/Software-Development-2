function arrayToList (arr){
    for ( var i = arr.length - 1; i >=0; i--){
      var list = { value: arr[i], rest: list};
    }
    return list;
  }
  function listToArray (list){
    var listArray = [];
    for (var node = list; node; node = node.rest){
        listArray.push(node.value);
    }
    return listArray;
  }
  function prepend (elem, list){
    var newList = {value: elem, rest: list};
    return newList;
  }
  function nth (list, num){
    if (!list){
        return undefined;
    } else if (num === 0){
        return list.value;
    } else {
        return nth(list.rest, num-1);
    }
  }
  console.log(arrayToList([10, 20]));
  console.log(listToArray(arrayToList([10, 20, 30])));
  console.log(prepend(10, prepend(20, null)));
  console.log(nth(arrayToList([10, 20, 30]), 1));