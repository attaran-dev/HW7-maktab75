function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let min = arr[i];
            let j = i-1; 
            while ((j > -1) && (min < arr[j])) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = min;
        }
    return arr;
}