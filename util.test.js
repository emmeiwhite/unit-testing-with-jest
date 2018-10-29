let util =require('./util.js'); // All util file comes here 

test('ADDING TWO NUMBERS',()=>{
    var result = util.sum(2,4);
    var expected = 6;

    // jest in action now