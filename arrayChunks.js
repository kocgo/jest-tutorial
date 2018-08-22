// Splits an array into chunked arrays of a specific length
const chunk = function(arr,len){
    const chunkedArray = [];
    while(len < arr.length){
        chunkedArray.push(arr.splice(0,len))
    }
    if(len >= arr.length){
        chunkedArray.push(arr)
    }
    return chunkedArray
}

// var fruits = [1, 2, 3, 4, 2, 40, 24];
// console.log(chunk(fruits,3))

module.exports = chunk;