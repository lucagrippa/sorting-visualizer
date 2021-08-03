function generateArray(arr, size) {
    arr = [];
    if (size > 100) {
        var max = size * 2 / 3;
    } else {
        var max = size + 1;
    }

    for (i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * max));
    }
    console.log(arr);
    generateHistogram(arr);
    return arr;
}