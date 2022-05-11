function power(n, m) {
    let counter = 0;
    let result;
    while (counter <= m) {
        result = n * n;
        counter++;
    }
    return result;
}
console.log(power(2,3));