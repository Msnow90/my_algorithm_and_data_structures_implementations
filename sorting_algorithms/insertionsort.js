const {performance} = require('perf_hooks');


function insertionSort(arrToSort, isAscending) {

	var arr = [...arrToSort];

	if (isAscending) {
		
		var ind = 0;

		while(ind < arr.length - 1) {

			if (arr[ind] > arr[ind + 1]) {

				var temp = arr[ind];
				arr[ind] = arr[ind + 1];
				arr[ind + 1] = temp;
				ind--;

			}

			else ind++;

		}
	}

	return arr;
}

function testAndBenchMark() {

	var testArr = [293829,3943974374,2323,32,233545,223234,34,34,34,34,4,657,6,8,76,545,3,43,4,2,36,65,6,2,4,1,5,6,2,8,7,13,19,11];

	var startInNanoSecs = process.hrtime()[1];

	var results = insertionSort(testArr, true);

	var endInNanoSecs = process.hrtime()[1];

	var completetionTime = endInNanoSecs -startInNanoSecs;
	var completetionTimeInMS = completetionTime / 1000000

	console.log('Benchmark took: ' + completetionTime + ' nano seconds or: ' + completetionTimeInMS + ' milliseconds.');

	console.log('Results did pass for first test: ', results.join() == testArr.sort((a,b) => a - b).join());
}

testAndBenchMark();