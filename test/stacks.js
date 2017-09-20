var assert = require('assert');

function Stack() {
	this.storage = {};
	this.count = 0;
}

Stack.prototype.push = function(val) {
	this.storage[this.count] = val;
	this.count ++;
}

Stack.prototype.pop = function() {
	if (this.count < 1) {
		return undefined;
	}

	var val = this.storage[this.count-1];
	delete this.storage[this.count-1];
	this.count --;
	return val;
}

Stack.prototype.peak = function() {
	if (this.count < 1) {
		return undefined;
	}

	return this.storage[this.count-1];
}

Stack.prototype.isEmpty = function() {
	return this.count < 1;
}

describe('Stack', function() {
	it('isEmpty works', function() {
		var stack = new Stack();

		assert.equal(true, stack.isEmpty());

		stack.push(2);

		assert.equal(false, stack.isEmpty());
	});

	it('peak works', function() {
		var stack = new Stack();

		stack.push(2);

		assert.equal(2, stack.peak());

		stack.push(5);

		assert.equal(5, stack.peak());
	});

	it('pop works', function() {
		var stack = new Stack();

		stack.push(2);
		stack.push(10);
		stack.push(5);

		assert.equal(5, stack.pop());
		assert.equal(false, stack.isEmpty());
		assert.equal(10, stack.pop());
		assert.equal(2, stack.pop());
		assert.equal(true, stack.isEmpty());
	});
});