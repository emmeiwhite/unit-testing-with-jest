// let util =require('./util.js'); // All util file comes here 
import * as util from './util.js';
// import demofile from './demofile'; 

import deepFreeze from 'deep-freeze';

describe("ARITHMETIC OPERATIONS - JEST TESTING",()=>{
    
     // 1.Adding two numbers
    test('ADDING TWO NUMBERS',()=>{
    var result = util.sum(2,4);
    var expected = 6;
    
        // jest in action now
    
        expect(result).toBe(expected); // A test case
    })

})

describe("TESTING CRUD OPERATIONS ON ARRAY",()=>{
    
    // B) CRUD OPERATIONS -jest Testing
    
    // 1.Adding item to a list test case
    
    test('ADDING ITEM TO A LIST IMMUTABLY',()=>{
        let list = ['redux','react-router'];
        
        deepFreeze(list)// Object is freeded now  AND cannot be immutated  directly  anymore                                                                                       
        // result will come from our file and then we'll test it with our expected result using jest
        let result = util.addItemToList(list,'react-modal');
    
        let expected = ['redux','react-router','react-modal'];
    
        expect(result).toEqual(expected);
    })
    
    
    // 2.Removing item from a list
    
    test('REMOVING ITEM FROM A LIST IMMUTABLY',()=>{
        let list = ['redux','react-router'];
        
        deepFreeze(list)// Object is freeded now  AND cannot be immutated  directly  anymore                                                                                       
        // result will come from our file and then we'll test it with our expected result using jest
        let result = util.removeItemFromList(list,1);
    
        let expected = ['redux'];
    
        expect(result).toEqual(expected);
    })
    
    // 3.Updating item in a list
    
    test("UPDATING ITEM IN THE A LIST",()=>{
        let colors = ['blue','green','white','orange'];
    
        deepFreeze(colors);
    
        let result = util.updateItemFromList(colors,2,'red');
    
        let expected = ['blue','green','red','orange'];
    
        expect(result).toEqual(expected);
    })
})


// FOR OBJECTS !!!
describe("OBJECT TEST CASES",()=>{
    
    test('Adding object property value',()=>{
        
        const person = {age:27}

        deepFreeze(person);

        const result = util.addNewPropertyToAnObject(person,'Imran');

        const expected = {age:27,name:'Imran'}

        expect(result).toEqual(expected);
    })
})

