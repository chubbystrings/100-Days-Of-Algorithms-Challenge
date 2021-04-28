function accum(s) {
    // your code
  let newArr = []
  s.split('').forEach((word, index)=> {
    let newWord = word.toLocaleLowerCase()
    if(index > 0) {
       let cap = `-${newWord.repeat(index + 1)}`
        cap = cap.split('').map((m, index) => index === 1 ? m.toLocaleUpperCase() : m).join('')
        newArr.push(cap)
    } else {
        newArr.push(`${newWord[0].toLocaleUpperCase()}`)
    }
  })
  
 return newArr.join('')
}