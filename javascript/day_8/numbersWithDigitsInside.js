function numbersWithDigitInside(x, d) {
    
    function checkNumbers(digit, num) {
        let count = 0
        const numStr = `${digit}`
        const arr = []
        for (let i = 1; i <= num; i++ ) {
            if(`${i}`.includes(numStr)) {
                arr.push(i)
                count += 1
            }
        }
        console.log(arr)
        let countProduct = 0
        let countSum = arr.reduce((a, b) => a + b, 0)
        if (arr.length > 0) {
            countProduct = arr.reduce((a, b) => {
                return a * b
            })
        }
        return {
            count,
            countSum,
            countProduct
        }
    }
    let { count, countSum, countProduct } = checkNumbers(d, x)
   
    return [count, countSum, countProduct]
 }