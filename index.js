const array = [2, 45, 8, 'hello', 78, 14];
let index = 0;

function removeElement(array, item) {
    index = array.indexOf(item)
    if (index >= 0) {
        array = array.splice(index, 1);
    }
}

removeElement(array, 'hello');
console.log(array);