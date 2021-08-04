function generateHistogram(arr) {
    const container = document.querySelector(".visualization");

    container.querySelectorAll('.block').forEach(e => e.remove());

    for (var i = 0; i < arr.length; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.classList.add("text-center");
        block.style.width = `${100 / arr.length}%`;
        block.style.height = `${(arr[i] * 3) + 20}px`;
        //block.style.transform = `translateX(${i * 10}px)`;
        block.style.backgroundColor = '#575757';

        if (arr.length <= 50) {
            const blockLabel = document.createElement("label");
            blockLabel.classList.add("block__id");
            blockLabel.classList.add("text-gray-100");

            blockLabel.innerHTML = arr[i];

            block.appendChild(blockLabel);
        }
        container.appendChild(block);
    }
}

function generateHistogramWithColors(arr, colors) {
    const container = document.querySelector(".visualization");

    container.querySelectorAll('.block').forEach(e => e.remove());

    for (var i = 0; i < arr.length; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.classList.add("text-center");
        block.style.width = `${100 / arr.length}%`;
        block.style.height = `${(arr[i] * 3) + 20}px`;
        //block.style.transform = `translateX(${i * 10}px)`;
        if (colors[i] == 0) {
            block.style.backgroundColor = '#575757';
        } else if (colors[i] == -1) {
            block.style.backgroundColor = '#c9404a';
        } else if (colors[i] == 1) {
            block.style.backgroundColor = '#2abf86';
        } else if (colors[i] == 2) {
            block.style.backgroundColor = '#e8924d';
        } else {
            block.style.backgroundColor = '#575757';
        }

        if (arr.length <= 50) {
            const blockLabel = document.createElement("label");
            blockLabel.classList.add("block__id");
            blockLabel.classList.add("text-gray-100");

            blockLabel.innerHTML = arr[i];

            block.appendChild(blockLabel);
        }

        container.appendChild(block);
    }
}