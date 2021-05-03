function checkCubic(str) {
    
    // check if number is Cubic
    function checkCubic(str) {
        return str ==  str.split('').map((num) => num ** 3).reduce((a, b) => +a + +b)
    }
    
    // chunk array of numbers into group of 3s 
    function chunk (arr) {
        const b = [...arr]
        let chonked = []
        while(b.length > 0) {
            chonked.push(b.splice(0, 3).join(''))
        }
        return chonked
    }
    // separate numbers from string and group in2 an array
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
        num = num.filter((m) => Array.isArray(m))
        console.log(num)
        return num
    }
    let res = []
    //loop through separated function return values and divide an array with length greater than 3 into chunks
    separate(str).forEach((m) => {
        if (m.length > 3) {
            res.push(chunk(m))
        } else {
            res.push(chunk(m))
        }
    })
    let result = []
    // turn array of arrays into a single array
    res.forEach((r) => {
        result = result.concat(r)
    })

    let newDigits = []
    // check each number in the array is sum of cubes
    result.forEach((d) => {
        if (checkCubic(d)) {
            newDigits.push(d)
        }
    })
    // arrange the array to return the specified result as string
    if(newDigits.length > 0) {
        const add = newDigits.reduce((a, b) => +a + +b)
        newDigits.push(add)
        newDigits.push('Lucky')
    } else {
        newDigits.push('Unlucky')
    }
    return newDigits.join(' ')
}