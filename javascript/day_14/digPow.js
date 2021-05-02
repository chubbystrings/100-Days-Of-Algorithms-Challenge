function digPow(n, p) {
    const numArr = `${n}`.split('')
    const resultArr = []
    for (let i = 0; i < numArr.length; i+= 1)  {
        const num = numArr[i]
        console.log(num)
        resultArr.push(num ** (p + i))
    }
    const a = resultArr.reduce((a, b) => a + b)
    if ( a % parseInt(n) === 0){
        return a / parseInt(n);
    }
    return -1
}
console.log(digPow(89, 1))