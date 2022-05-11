function sumM(N) {
  let sum = 0;
  let M;
  do {
    M = +prompt(`Type a number between 1 and ${N}`);
    if (M >= 1 && M <= N) {
      sum += M;
    } else {
      console.log("Invalid Number");
    }
  } while (M !== null);
  return sum;
}
