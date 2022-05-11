function counters(N) {
    N = N.toString();
let zeroCounter = 0;
let evenCounter = 0;
let oddCounter = 0;
for (let i = 0; i<N.length; i++){
    if(N[i] == 0) {
        zeroCounter++;
    } if (N[i]%2 == 0) {
        evenCounter++;
    } else {
        oddCounter++;
    }
}

return `Number of zeros: ${zeroCounter} \n Number of odds: ${oddCounter} \n Number of evens: ${evenCounter}`
}
console.log(counters(234560));