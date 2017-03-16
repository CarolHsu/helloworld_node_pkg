var assert = require('assert');
var area = require('../index.js');

describe('#first', function(){
    it('should return 8 when width is 2, height is 4', function() {
        assert.equal(8, area(2, 4));
    });
});
