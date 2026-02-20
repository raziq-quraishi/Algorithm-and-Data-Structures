// --------------- Binary Search -------------------------

function binarySearch(arr, target){
    // let temp =0;
    // for( let i = 0; i < arr.length; i ++){
    //     if( arr[i] > arr[i+1]){
    //         arr[i] = arr[i+1]
    //         // temp= arr[i];
    //         // arr[i+1] = temp;
    //     }
    // }
    // return arr;

    arr.sort((a,b)=> a - b)
    let leftIndex = 0;
    let rightIndex = arr.length -1;
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1;
        }else{
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([-2,1,6,12,18,23,24], 18));
console.log(binarySearch([-2,1,6,12,18,23,24], 6));
console.log(binarySearch([-2,1,6,12,18,23,24], 61));