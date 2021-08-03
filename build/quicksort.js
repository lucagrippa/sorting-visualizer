function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function swap(arr, index1, index2) {
    await sleep(100);

    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
    generateHistogram(arr);
}

async function partition(arr, lo, hi) {
    let left = lo + 1;
    let right = hi;
    let pivot = lo;

    while (true) {
        while (arr[left] < arr[pivot]) {
            left++;
            if (left == hi) break;
        }

        while (arr[right] > arr[pivot]) {
            right--;
            if (right == lo) break;
        }

        if (left >= right) break;
        await swap(arr, left, right);
        left++;
        right--;

    }
    await swap(arr, pivot, right);
    return right;
}

async function quickSortRecursive(arr, left, right) {
    if (right <= left) {
        return;
    }
    let index = await partition(arr, left, right);
    await quickSortRecursive(arr, left, index - 1);
    await quickSortRecursive(arr, index + 1, right);
}

function quickSort(arr) {
    // Shuffle array here
    quickSortRecursive(arr, 0, arr.length - 1);
}