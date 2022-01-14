s1 = 'nameless'
s2 = 'salesmen'

const anagram = (s1, s2) => {
   const a = s1.split('').sort().join('')
   const b = s2.split('').sort().join('')
   return a === b
}
// console.log(anagram(s1,s2))

const anagram1 = (s1, s2) => {
    if (s1.length !== s2.length){
        return false
    }
    const a = s1.split('')
    const b = s2.split('')
    let freq1 = {}
    let freq2 = {}
    for (char of a){
        if (freq1[char]){
            freq1[char]++
        }else {
            freq1[char] = 1
        }
    }
    for (char of b){
        if (freq2[char]){
            freq2[char]++
        }else {
            freq2[char] = 1
        }
    }
//    console.log(freq1, freq2)
    for (const key in freq1) {
        // console.log(freq1[key])
        if (!freq2[key] || freq2[key] !== freq1[key]) {
            return false
        }
    }
    return true
}

console.log(anagram1(s1, s2))