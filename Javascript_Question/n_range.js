// Write a JavaScript function that takes an array of numbers as a parameter and returns a number based on the following requirements.

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Constraints:
// n === nums.length
// 0 <= nums[i] <= n
// All the numbers in nums are unique.

// Example 1
// Given nums = [3,0,1]
// Your function should return 2 because it is the number missing from the range [0 - 3]
// Because 3 is the number of elements in the array.

// Example 2
// Given nums = [9,6,4,2,3,5,7,0,1]
// Your function should return 8 because it is the number missing from the range 
// [0 - 9] Because 9 is the number of elements in the array.


// Example 3
// Given nums = [0,1]
// Your function should return 2 because it is the number missing from the range 
// [0 - 2] Because 2 is the number of elements in the array.

function NRange(nums) {
    let n =nums.length;
    nums.sort();
    for (let index = 0; index <= n; index++) {
        const element = nums[index];
        if (0 <= element <= n && element === index) {
            continue;
        }
        else{
            return index;
        }
    }
}
console.log(NRange([3,0,1]));
console.log(NRange([9,6,4,2,3,5,7,0,1]));
console.log(NRange([0,1]));
console.log(NRange([4,2,0,3]));