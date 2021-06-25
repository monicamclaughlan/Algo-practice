var twoSum = function(nums, target) {
    let newArray = []
    for (i=0; i < nums.length; i++){ 
        for (j=i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] == target) { 
                newArray.push(i, j)
            }
        }
    }
    return newArray
};

console.log(twoSum([2,3,4,7], 9))

// Time complexity = O(n^2)
// Space complexity = O(1)

var twoSums = function(nums, target) { 
    let map = new Map;
    for (var i=0; i < nums.length; i++){ 
        let complement = target - nums[i]
        if (map.has(complement)){ 
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
}

console.log(twoSums([2,3,4,7], 9))

// Time complexity = O(n)
// Space complexity = O(n)