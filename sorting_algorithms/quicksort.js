function quickSort(array) {
    // base case
    if (array.length <= 1 ) {
      return array;
    }
    // keep track of which index is the partition and sides greater than or less than partition
    var partitionInd = Math.floor(array.length / 2);
    var partition = array[partitionInd];
    var leftSide = [];
    var rightSide = [];
    
    for (var i = 0; i < array.length; ++i) {
      // skip evaluating our partition, since we know it will be in the middle
      if (i === partitionInd) continue;
      if (array[i] < partition) leftSide.push(array[i])
      if (array[i] >= partition) rightSide.push(array[i]);
    }
    return quickSort(leftSide).concat([partition]).concat(quickSort(rightSide));
  }
  
  quickSort([3,4,2,7,9,5,4,7,8,7,8,9,375,39,9384983,638278,7849,95749,39839,4938,3939]);