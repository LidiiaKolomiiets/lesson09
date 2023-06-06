const array = [1, 2, 3, 4, 5, 6, 7];

let item = 0;

function removeElement(array, item){
    array = array.splice(item-1, 1)
}

removeElement(array, 5);
console.log(array);