var isPalindrome = function(x) {
    let y = x.toString().split('').reverse().join('')
    console.log(y)
    let z = Number.parseInt(y)
    console.log(z)
    return x == z  
  };

  console.log(isPalindrome(121))