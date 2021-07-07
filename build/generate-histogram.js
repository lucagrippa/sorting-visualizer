function generateHistogram(arr) {
    const container = document.querySelector(".visualization");

    container.querySelectorAll('.block').forEach(e => e.remove());

    for (i = 0; i < arr.length; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.classList.add("text-center");
        block.style.width = `${100 / arr.length}%`;
        block.style.height = `${arr[i] * 3}px`;
        //block.style.transform = `translateX(${i * 10}px)`;
        block.style.backgroundColor = '#00FF00';

        const blockLabel = document.createElement("label");
        blockLabel.classList.add("block__id");

        blockLabel.innerHTML = arr[i];

        block.appendChild(blockLabel);
        container.appendChild(block);
    }
}