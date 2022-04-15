//Given two arrays one is just random integers (nums), the other is sub arrays of two values representing indices in the first array (indices)
const nums = [-1,3,4,7,-3,2,5]
const indices = [[0,2],[2,5],[0,5]]
                // 6,   10,    12 => 28
//Find the sum of the values from array 1 between the indices provided by array2 and then add all the sums for the individual pairs of indices

// function findSum (nums, indices) {
//     let finalSum = 0
//     for (let i = 0; i < indices.length; i++) {
//         let firstSum = 0
//         for (let j = indices[i][0]; j <= indices[i][1]; j++) {
//             firstSum += nums[j]
//         }
//         console.log(firstSum)
//         finalSum += firstSum
//     }
//     return finalSum
// }

function findSum(nums,indices) {
    let total = nums.reduce((prev, curr) => prev + curr)
    let sumArray = []
    for (let i = 0; i < nums.length; i++) {
        sumArray[i] = total
        total -= nums[i]
    }
    let returnSum = 0
    let left, right = 0
    for (let i = 0; i < indices.length; i++) {
        left = sumArray[indices[i][0]]
        if (indices[i][1] < sumArray.length) {
            right = sumArray[indices[i][1] + 1]
        } else {
            right = 0
        }
        returnSum += left - right
    }
    return returnSum
}

console.log(findSum(nums, indices))