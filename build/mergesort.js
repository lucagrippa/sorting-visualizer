function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function merge(colors, arr, tmpArr, lo, mid, hi) {
    for (let p = 0; p < arr.length; p++) {
        colors[p] = 0;
    }

    for (let k = lo; k <= hi; k++) { // first we copy over the array to our tmp array
        tmpArr[k] = arr[k];
        arrayAccesses += 2;
        document.getElementById("array-accesses").innerHTML = arrayAccesses;
    }

    colors[lo] = 1;
    colors[mid] = 2;
    colors[hi] = 1;

    let left = lo; // keeps index of left side of tmp array
    let right = mid + 1; // keeps index of right side of tmp array

    for (index = lo; index <= hi; index++) { // index keeps the index of the sorted array
        if (left > mid) { // will merge remaining values in right side of array
            arr[index] = tmpArr[right];
            arrayAccesses += 2;
            document.getElementById("array-accesses").innerHTML = arrayAccesses;
            right++;
        } else if (right > hi) { // will merge remaining values in left side of array
            arr[index] = tmpArr[left];
            arrayAccesses += 2;
            document.getElementById("array-accesses").innerHTML = arrayAccesses;
            left++;
        } else if (tmpArr[left] < tmpArr[right]) { // checks if value in left array is less than value in right array
            document.getElementById("comparisons").innerHTML = ++comparisons;
            arr[index] = tmpArr[left];
            arrayAccesses += 4;
            document.getElementById("array-accesses").innerHTML = arrayAccesses;
            left++;
        } else {
            document.getElementById("comparisons").innerHTML = ++comparisons;
            arr[index] = tmpArr[right];
            arrayAccesses += 4;
            document.getElementById("array-accesses").innerHTML = arrayAccesses;

            right++;
        }

        await sleep(parseInt(document.getElementById("speedSlider").value));
        generateHistogramWithColors(arr, colors);
    }
}

async function mergeSortRecursive(colors, arr, tmpArr, lo, hi) {
    if (lo >= hi) { // gets rid of edge case where array has 1 element
        return;
    }

    let mid = lo + Math.floor((hi - lo) / 2);
    await mergeSortRecursive(colors, arr, tmpArr, lo, mid);
    await mergeSortRecursive(colors, arr, tmpArr, (mid + 1), hi);
    await merge(colors, arr, tmpArr, lo, mid, hi);
}

async function mergeSort(arr) {
    let tmpArr = [];
    let colors = [];
    await mergeSortRecursive(colors, arr, tmpArr, 0, (arr.length - 1));

    for (let t = 0; t < arr.length; t++) {
        colors[t] = 1;
    }

    generateHistogramWithColors(arr, colors);
}

// implement compare two sorting algos function with 
// await Promise.all([]);
// await Promise.all([
//      quicksort(arr),
//      mergesort(arr)
//]);