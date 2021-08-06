function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function swap(colors, arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;

    arrayAccesses += 4;
    document.getElementById("array-accesses").innerHTML = arrayAccesses;

    await sleep(parseInt(document.getElementById("speedSlider").value));
    generateHistogramWithColors(arr, colors);
}

async function partition(colors, arr, lo, hi) {
    for (let p = 0; p < arr.length; p++) {
        colors[p] = 0;
    }

    let left = lo + 1;
    colors[left] = 1;
    let right = hi;
    colors[right] = -1;
    let pivot = lo;
    colors[pivot] = 2;

    generateHistogramWithColors(arr, colors);

    while (true) {
        while (arr[left] < arr[pivot]) {
            document.getElementById("comparisons").innerHTML = ++comparisons;
            arrayAccesses += 2;
            document.getElementById("array-accesses").innerHTML = arrayAccesses;

            colors[left] = 0;
            left++;
            colors[left] = 1;
            if (left == hi) break;
            await sleep(parseInt(document.getElementById("speedSlider").value));
            generateHistogramWithColors(arr, colors);
        }

        while (arr[right] > arr[pivot]) {
            document.getElementById("comparisons").innerHTML = ++comparisons;
            arrayAccesses += 2;
            document.getElementById("array-accesses").innerHTML = arrayAccesses;
            colors[right] = 0;
            right--;
            colors[right] = -1;
            if (right == lo) break;
            await sleep(parseInt(document.getElementById("speedSlider").value));

            generateHistogramWithColors(arr, colors);
        }

        if (left >= right) break;
        await swap(colors, arr, left, right);
        colors[left] = 0;
        left++;
        colors[left] = 1;
        colors[right] = 0;
        right--;
        colors[right] = -1;
        await sleep(parseInt(document.getElementById("speedSlider").value));
        generateHistogramWithColors(arr, colors);

    }
    await swap(colors, arr, pivot, right);
    return right;
}

async function quickSortRecursive(colors, arr, left, right) {
    if (right <= left) {
        return;
    }

    let index = await partition(colors, arr, left, right);
    await quickSortRecursive(colors, arr, left, index - 1);
    await quickSortRecursive(colors, arr, index + 1, right);
}

async function quickSort(arr) {
    // Shuffle array here
    let colors = [];
    await quickSortRecursive(colors, arr, 0, arr.length - 1);

    for (let t = 0; t < arr.length; t++) {
        colors[t] = 1;
    }

    generateHistogramWithColors(arr, colors);
}