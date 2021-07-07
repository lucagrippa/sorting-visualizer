function less(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}

function merge(arr, tmpArr, lo, mid, hi) {

    for (k = lo; k <= hi; k++) { // first we copy over the array to our tmp array
        tmpArr[k] = arr[k];
    }

    i = lo; // keeps index of left side of tmp array
    j = mid + 1; // keeps index of right side of tmp array

    for (l = lo; l <= hi; l++) { // l keeps the index of the sorted array
        if (i > mid) { // will merge remaining values in right side of array
            arr[l] = tmpArr[j];
            j++;
        } else if (j > hi) { // will merge remaining values in left side of array
            arr[l] = tmpArr[i];
            i++;
        } else if (less(tmpArr[i], tmpArr[j])) { // checks if value in left array is less than value in right array
            arr[l] = tmpArr[i];
            i++;
        } else {
            arr[l] = tmpArr[j];
            j++;
        }
    }
}

function sort(arr, tmpArr, lo, hi) {
    if (lo < hi) {
        mid = lo + ((hi - lo) / 2);
        sort(arr, tmpArr, lo, mid);
        sort(arr, tmpArr, mid + 1, hi);
        merge(arr, tmpArr, lo, mid, hi);
    }
}

function mergeSort(arr) {
    tmpArr = [];
    sort(arr, tmpArr, 0, arr.length - 1);
}