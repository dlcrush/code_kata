var assert = require('assert');

function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	var middle = arr.length / 2;
	var left = arr.slice(0, middle);
	var right = arr.slice(middle, arr.length);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
	var result = [];

	while(arr1.length && arr2.length) {
		if (arr1[0] < arr2[0]) {
			result.push(arr1.shift());
		} else {
			result.push(arr2.shift());
		}
	}

	while(arr1.length) {
		result.push(arr1.shift());
	}

	while (arr2.length) {
		result.push(arr2.shift());
	}

	return result;
}

describe('MergeSort', function() {
	it('correctly merges 2 arrays', function() {
		assert.deepEqual([1,2,3,4], merge([1,3], [2,4]));
		assert.deepEqual([1,2,3,4,5], merge([3,4,5], [1,2]));
	});
	it('correctly sorts an array', function() {
		assert.deepEqual([1,2,3,4,5], mergeSort([3,1,5,2,4]));
		assert.deepEqual([1,2,3,4], mergeSort([4,3,2,1]));
		assert.deepEqual([1,2,3,4], mergeSort([1,2,3,4]));
	});
});