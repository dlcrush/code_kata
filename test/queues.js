var assert = require('assert');

function Queue() {
	this.arr = [];
}

Queue.prototype.push = function(val) {
	this.arr.push(val);
}

Queue.prototype.pop = function() {
	return this.arr.shift();
}

Queue.prototype.isEmpty = function() {
	return this.arr.length < 1;
}

Queue.prototype.peak = function() {
	return this.arr[0];
}

describe('Queue', function() {
	it('correctly determines if empty', function() {
		var queue = new Queue();
		assert.equal(true, queue.isEmpty());
		queue.push(2);
		assert.equal(false, queue.isEmpty());
	});

	it('peak works', function() {
		var queue = new Queue();
		queue.push(2);
		assert.equal(2, queue.peak());
		queue.push(4);
		assert.equal(2, queue.peak());
	});

	it('pop works', function() {
		var queue = new Queue();
		queue.push(2);
		queue.push(7);
		queue.push(1);

		assert.equal(false, queue.isEmpty());

		assert.equal(2, queue.peak()); 
		assert.equal(2, queue.pop());
		assert.equal(7, queue.peak());
		assert.equal(7, queue.pop());

		assert.equal(false, queue.isEmpty());

		assert.equal(1, queue.pop());

		assert.equal(true, queue.isEmpty());
	});
})