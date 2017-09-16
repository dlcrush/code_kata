var assert = require('assert');

function node(value, left, right) {
	return {
		value: value,
		left: left,
		right: right
	};
}

function BST() {
	this.root = null;
}

BST.prototype.push = function(value) {
	if (! this.root) {
		this.root = node(value);
		return; 
	}

	// If we get to this point, tree is not empty
	var current = this.root;

	while (current) {
		if (value < current.value) {
			if (! current.left) {
				current.left = node(value);
				break;
			} else {
				current = current.left;
			}
		}
		else {
			if (! current.right) {
				current.right = node(value);
				break;
			} else {
				current = current.right;
			}
		}
	}
}

BST.prototype.traverse = function(callback) {
	this.doTraversal(this.root, callback);
}

BST.prototype.doTraversal = function(node, callback) {
	if (node) {
		if (node.left) {
			this.doTraversal(node.left, callback);
		}
		callback(node.value);
		if (node.right) {
			this.doTraversal(node.right, callback);
		}
	}
}

describe('BST', function() {
	it('pushes and traverses', function() {
		var bst = new BST();
		bst.push(2);
		bst.push(3);
		bst.push(4);
		bst.push(1);
		bst.push(6);

		var test = [];
		bst.traverse(function(val) {
			test.push(val);
		});

		assert.deepEqual([1, 2, 3, 4, 6], test);
	});
});

describe('node', function() {
	it('correctly creates a node', function() {
		assert.deepEqual({value: 12, left: undefined, right: undefined}, node(12));
		var test = {
			value: 4,
			left: {
				value: 2,
				left: undefined,
				right: undefined
			},
			right: {
				value: 10,
				left: undefined,
				right: undefined
			}
		};
		assert.deepEqual(test, node(4, node(2), node(10)));
	});
})