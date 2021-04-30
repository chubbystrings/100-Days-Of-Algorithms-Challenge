function binaryGap(n) {
    
    // convert to binary
    const binary = n.toString(2)
    
    // match binary string to match a binary with gaps e.g 1001 return 0 if not met
    if (!/^1{1,}0{1,}1/gm.test(binary)) return 0

    // split binary string, loop and convert 1s to -
    let binaryArr = binary.split('')
    binaryArr = binaryArr.map((b, i) => {
        if (b === '1'){
            return `-`
        }
        return b
    })
    
    // join anfd split binary string with - to create zeros and spaces,
    binaryArr = binaryArr.join('').split('-')

    // if the last element in the array is not space, remove the element
    if (binaryArr[binaryArr.length - 1] !== '' ) {
        binaryArr.pop()
    }

    // loop through each string return their length and return the max
    return Math.max(...binaryArr.map((len) => len.length))
}