function dontGiveMeFive(start, end){
  
    function checkFive(strt, stop) {
        let count = 0
        for (let i = strt; i <= stop; i+= 1) {  
            const strNum = `${i}`
            if (!strNum.includes('5')) {
                count++
            }
        }
        return count
    }
    return checkFive(start, end)
}