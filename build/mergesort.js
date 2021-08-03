function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function merge(arr, tmpArr, lo, mid, hi) {
    for (let k = lo; k <= hi; k++) { // first we copy over the array to our tmp array
        tmpArr[k] = arr[k];
    }

    let left = lo; // keeps index of left side of tmp array
    let right = mid + 1; // keeps index of right side of tmp array

    for (index = lo; index <= hi; index++) { // index keeps the index of the sorted array
        if (left > mid) { // will merge remaining values in right side of array
            arr[index] = tmpArr[right];
            right++;
        } else if (right > hi) { // will merge remaining values in left side of array
            arr[index] = tmpArr[left];
            left++;
        } else if (tmpArr[left] < tmpArr[right]) { // checks if value in left array is less than value in right array
            arr[index] = tmpArr[left];
            left++;
        } else {
            arr[index] = tmpArr[right];
            right++;
        }

        await sleep(50);
        generateHistogram(arr);
    }
}

async function mergeSortRecursive(arr, tmpArr, lo, hi) {
    if (lo >= hi) { // gets rid of edge case where array has 1 element
        return;
    }

    let mid = lo + Math.floor((hi - lo) / 2);
    await mergeSortRecursive(arr, tmpArr, lo, mid);
    await mergeSortRecursive(arr, tmpArr, (mid + 1), hi);
    await merge(arr, tmpArr, lo, mid, hi);
}

function mergeSort(arr) {
    let tmpArr = [];
    mergeSortRecursive(arr, tmpArr, 0, (arr.length - 1));
    generateHistogram(arr);
}