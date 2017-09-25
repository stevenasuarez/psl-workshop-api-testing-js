const { assert } = require('chai');

describe('Array', ()=>{
    describe('#indexOf()', () =>{
        it(returnValue(), function(){
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});

function returnValue() {
    return 'should return -1 when the value is not present';
}

