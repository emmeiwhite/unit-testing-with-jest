let util =require('./util.js'); // All util file comes here 

let deepFreeze = require('deep-freeze');
// A) ARITHMETIC OPERATIONS - JEST TESTING

// 1.Adding two numbers

test('ADDING TWO NUMBERS',()=>{
    var result = util.sum(2,4);
    var expected = 6;

    // jest in action now

    expect(result).toBe(expected); // A test case
})

// B) CRUD OPERATIONS -jest Testing

// 1.Adding item to a list test case

test('ADDING ITEM TO A LIST IMMUTABLY',()=>{
    var list = ['redux','react-router'];
    
    deepFreeze(list)// Object is freeded now  AND cannot be immutated  directly  anymore                                                                                       
    // result will come from our file and then we'll test it with our expected result using jest
    var result = util.addItemToList(list,'react-modal');

    var expected = ['redux','react-router','react-modal'];

    expect(result).toEqual(expected);
})