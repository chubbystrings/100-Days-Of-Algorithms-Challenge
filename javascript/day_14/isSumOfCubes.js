 function isSumOfCubes(s){
    // ...
    function checkCubic(arr) {
        const a = [...arr]
        return +a.join('') ==  arr.map((num) => num ** 3).reduce((a, b) => +a + +b)
    }
    const separate = (str) => {
        let num = []
        for (let i = 0; i < str.length; i ++) {
            let n = str[i]
            if (Number(n) || n === '0') {
                if (Array.isArray(num[num.length - 1])) {
                    num[num.length - 1].push(n)
                } else {
                    num.push([n])
                }
            }else {
                num.push(n)
            }
        }
        console.log(num)
        num = num.filter((m) => m === '.' || Array.isArray(m))
        if (num.includes('.') ) {
            const index = num.findIndex((dot) => dot === '.')
            if (num[index + 1] !== '.' ) {
                num.splice(num.indexOf('.') - 1, num.indexOf('.') + 1)
            }
            
        }
        return num.filter(m => m.length <= 3)
    }
    let digits = separate(s).filter((d) => Array.isArray(d))
    console.log(digits)
    let newDigits = []
    digits.forEach((d) => {
        if (checkCubic(d)) {
            const ds = d.join('')
            newDigits.push(ds)
        }
    })
    if(newDigits.length > 0) {
        const add = newDigits.reduce((a, b) => +a + +b)
        newDigits.push(add)
        newDigits.push('Lucky')
    } else {
        newDigits.push('Unlucky')
    }
    return newDigits.join(' ')
}

