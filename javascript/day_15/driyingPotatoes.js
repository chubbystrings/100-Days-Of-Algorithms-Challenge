function potatoes(p0, w0, p1) {
    // your code
    const p2 = Math.floor((100 - p0) / (100 - p1))
    return Math.floor(w0 * p2)
}