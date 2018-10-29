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

const updateItemFromList = (list,index,listItem)=>{
    
}

module.exports = {
    sum,
    addItemToList,
    removeItemFromList
}