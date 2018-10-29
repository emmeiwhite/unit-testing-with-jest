// 1.Sum of two numbers
const sum = (num1,num2)=>{
    return num1+num2;
}
// CRUD operations being tested
// 1. Adding Item to a list
const addItemToList = (list,listItem)=>{
    // a) In a mutable way we are adding an item to a list
    list.push(listItem);
    return list;
    // return list.concat(listItem);
}

const removeItemFromList = (list,index)=>{
    // return list.splice(index,1)
}

const updateItemFromList = (list,index,listItem)=>{
    return list.splice(index,1)
}

module.exports = {
    sum,
    addItemToList
}