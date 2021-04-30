function solution(A, K) {
    // loop K times, pop the last element and unshift to the beginning of the array
    for (i = 0; i < K; i+= 1) {
        const last = A.pop()
        A.unshift(last)
    }
    return A
}