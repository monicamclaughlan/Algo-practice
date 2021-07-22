var romanToInt = function(s) {
    let count = 0;
    let previous = 0
    let current = 0
    let numerals = new Map ([
    ['I', 1], 
    ['V', 5], 
    ['X', 10], 
    ['L', 50], 
    ['C', 100], 
    ['D', 500], 
    ['M', 1000]
    ])
    
    for (const char of s.split('').reverse()){ 
        current = numerals.get(char)
        console.log(current)
        if(current >= previous){ 
            count += current
        }else { 
        count -= current
        }
        previous = current
        
    }
    
return count
};

console.log(romanToInt('IV'))