const arr = [1, 2, 3, 3, 3, 4, 5]
const target = 2

const sortedArray = (arr, target) => {
    let newArr = []
    for (i=0; i < arr.length; i++){
        if (arr[i] === target){ 
            newArr.push(i)
        }
    }
    if (newArr.length !== 0){
        return [newArr[0], newArr[newArr.length - 1]]
    }else {
        return [-1,-1]
    }
    
}

console.log(sortedArray(arr, target))