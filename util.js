// 1.Sum of two numbers
const sum = (num1,num2)=>{
    return num1+num2;
}

// 1. Adding Item to a list
const addItemToList = (list,listItem)=>{
    return list.concat(listItem);
}

// 2. Removing Item from the list, Both Mutably and Immutabily
const removeItemFromList = (list,index)=>{
    return list.filter((listItem,i)=>{
        return i !== index;
    })
}

// 3. Update the element in an array
const updateItemFromList = (colors,index,element)=>{
    // Mutably
    // colors[index] = element;
    // return colors;

    // To Immutabily do the stuff, we will need to copy the list items first, then update the copied array

    const newColors = colors.slice(); // slice method copies the array

    newColors[index] = element;

    return newColors;
}

// 4. Adding property value (newItem) to an object / Immutabily

var addNewPropertyToAnObject = function(person,nameValue){
   // 1. Directly adding property on the object - Mutable way
   /*
   person['name'] = nameValue;
   return person;
   */

    // 2. Using ES5 Object.assign
    /*
    return Object.assign({},person,{name:nameValue})
    */

    // 3. Using ES6 spread operator

    return {...person,name:nameValue}
}



export {sum,addItemToList,removeItemFromList,updateItemFromList,addNewPropertyToAnObject};