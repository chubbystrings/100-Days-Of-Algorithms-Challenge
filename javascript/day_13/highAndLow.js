function highAndLow(numbers){
    // ...
    const sorted = numbers.split(' ').sort((a, b) => Number(a) - Number(b))
    return `${sorted[sorted.length - 1]} ${sorted[0]}`
    
}