// -------------------- Bubble Sort ----------------------------

//  [-6, 20, 8, -2, 4]


// let swap = (arr, left, right) => {
//         let temp = arr[left];
//             arr[left] = arr[right];
//             arr[right] = temp
//     }
function bubbleSort(arr){
    let swap = (arr, left, right) => ([arr[left], arr[right]] = [arr[right], arr[left]])
   for(let i = 0; i< arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > arr[j+1]){
            swap(arr, j, j+1)
        }
    }
   }
   return arr;
}

console.log(bubbleSort([-6, 20, 8, -2, 4]));