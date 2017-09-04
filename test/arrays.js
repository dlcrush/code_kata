var assert = require('assert');

function mergeSortedArrays(arr1, arr2) {
	var merged = [],
		i = 0;
		j = 0;

	while (i < arr1.length || j < arr2.length) {
		if (i < arr1.length && j < arr2.length) {
			if (arr1[i] < arr2[j]) {
				merged.push(arr1[i]);
				i++;
			} else {
				merged.push(arr2[j]);
				j++;
			}
		} else if (j < arr2.length) {
			merged.push(arr2[j]);
			j ++;
		} else {
			merged.push(arr1[i]);
			i ++;
		}

	}

	return merged;
}

describe('mergeSortedArrays', function() {
	it('should merge sorted arrays', function() {
		assert.deepEqual([1, 2, 3, 4, 5], mergeSortedArrays([1, 3, 5], [2, 4]));
		assert.deepEqual([1, 2, 3, 4, 5, 6], mergeSortedArrays([2, 3], [1, 4, 5, 6]));
		assert.deepEqual([1, 2, 3, 4], mergeSortedArrays([], [1, 2, 3, 4]));
	});
});