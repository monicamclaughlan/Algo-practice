var reverse = function(x) {
    
    if (Math.sign(x) == -1){ 
        let y = Math.abs(x)
        let n = y.toString(10).split("").reverse().join('')
        if (n > 2147483647){ 
        return 0
        }else {
            return -n
        }
        
    }
    else{
        let n = x.toString(10).split("").reverse().join('')
        if (n > 2147483647){ 
        return 0
        }else {
            return n
        }
        
    }
    
};

console.log(reverse(123))

const reverse2 = x => {
    const limit = 2147483648;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};

console.log(reverse2(-321))