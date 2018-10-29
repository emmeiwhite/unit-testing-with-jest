// 1.Sum of two numbers
const sum = (num1,num2)=>{
    return num1+num2;
}


// 2. Adding Item to a list
const addItemToList = (list,listItem)=>{
    // a) In a mutable way we are adding an item to a list
    list.push(listItem);
    return list;
}

module.exports = {
    // sum
    addItemToList
}