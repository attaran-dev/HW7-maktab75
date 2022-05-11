function binarySearch(arr, k) {
  let i = 0;
  let j = arr.length - 1;
  let mid;
  while (j >= i) {
    mid = i + Math.floor((j - i) / 2);
    if (arr[mid] === k) {
      return mid;
    }
    if (arr[mid] > k) {
      j = mid - 1;
    }
    else i = mid + 1;
  }
  return 'Not Found';
}