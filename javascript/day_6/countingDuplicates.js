const duplicateCount = (str) => {
    const obj = str.split('').map((m) => {
        if (/^[a-zA-Z]+$/.test(m)) {
            return m.toLowerCase()
        }
    })
    .reduce((tally, item) => {
        tally[item] = (tally[item] || 0) + 1
        return tally
    }, {})
    console.log(obj)

    let arr = []
    for (let key in obj) {
        if (obj[key] > 1) {
            arr.push(key)
        }
    }
    arr = [...new Set(arr)]
    return arr.length
}

console.log(duplicateCount('abcde'))