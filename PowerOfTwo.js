
// --------- Power Of Two ------------

function isPowerOfTwo(n){
    if(n < 1) return false
    for(let i = 1 ; i < n; i++){
        if(i**2 == n){
            return true
        }
    }
    return false
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(15));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(25));
console.log(isPowerOfTwo(29));

// Big-O = O(n)