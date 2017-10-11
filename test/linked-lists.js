var assert = require('assert');

function Node(val, next) {
	return {
		value: val,
		next: next
	};
}

function LinkedList() {
	this.head = undefined;
}

LinkedList.prototype.add = function(val) {
	var last = this.head;

	while(last && last.next) {
		last = last.next;
	}

	last = new Node(val);
}

// LinkedList.prototype.remove = function()