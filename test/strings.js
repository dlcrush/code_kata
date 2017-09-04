var assert = require('assert');

function reverseString(str) {
	return str.split("").reverse().join("");
}

describe('reverseString', function() {
	it('should reverse string', function() {
		assert.equal('parc', reverseString('crap'));
		assert.equal('wow', reverseString('wow'));
		assert.equal('acirema', reverseString('america'));
		assert.equal('nocab', reverseString('bacon'));
	});
});

function reverseWords(str) {
	var words = str.split(" ");
	for(var i = 0; i < words.length; i ++) {
		words[i] = reverseString(words[i]);
	}
	return words.join(" ");
}

describe('reverseWords', function() {
	it('should reverse each word', function() {
		assert.equal('ecno nopu a emit', reverseWords('once upon a time'));
		assert.equal('nocab', reverseWords('bacon'));
		assert.equal('yppah reve retfa', reverseWords('happy ever after'));
	});
});

function palindrome(str) {
	str = str.toLowerCase();
	str = str.replace(/\s/g, '');
	return str.split("").reverse().join("") === str;
}

describe('palindrome', function() {
	it('works with single word', function() {
		assert.equal(true, palindrome('wow'));
		assert.equal(false, palindrome('bacon'));
		assert.equal(true, palindrome('kayak'));
		assert.equal(true, palindrome('Kayak'));
	});

	it('works with words', function() {
		assert.equal(false, palindrome('The happiest place on earth'));
		assert.equal(true, palindrome('Do geese see God'));
		assert.equal(false, palindrome('this is a test'));
		assert.equal(true, palindrome('top spot'));
	});
});