

// Linear Search Algorithm Implementation in JavaScript

function linearSearch(arr, target) {
    for(let i = 0; i< arr.length; i++){
        if(arr[i]== target){
            return i
        }
    }
    return -1
}

// Big-O = O(n)

console.log(linearSearch([2,56,2,8,11,0,3,14], 11))
console.log(linearSearch([2,56,2,8,11,0,3,14], 56))
console.log(linearSearch([2,56,2,8,11,0,3,14], 569))