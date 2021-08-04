var sizeSlider = document.getElementById("sizeSlider");
var sizeSliderValue = document.getElementById("sizeSliderValue");
sizeSliderValue.innerHTML = sizeSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sizeSlider.oninput = function() {
    sizeSliderValue.innerHTML = this.value;
}

var speedSlider = document.getElementById("speedSlider");
var speedSliderValue = document.getElementById("speedSliderValue");
speedSliderValue.innerHTML = speedSlider.value + " ms"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
speedSlider.oninput = function() {
    speedSliderValue.innerHTML = this.value + " ms";
}