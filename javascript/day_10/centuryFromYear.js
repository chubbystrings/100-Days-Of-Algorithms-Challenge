function century(year) {
    // Finish this :)
    let century = 0
    if (year % 100 === 0) {
        century = year / 100
    } else {
        century = Math.floor(year / 100) + 1
    }
    return century
}