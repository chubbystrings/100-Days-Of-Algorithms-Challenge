function race(v1, v2, g) {
    // your code
    if (v1 >= v2)return null;

    // formular to get the decimal into seconds
    let value = (g * 3600) / (v2 - v1);

    let hour = Math.floor(value / 3600)
    let minute = Math.floor((value % 3600) / 60)
    let seconds = Math.floor(value % 60)
    console.log(value)
    return [hour, minute, seconds];
}