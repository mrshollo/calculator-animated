// script.js
let display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "Error") {
        clearDisplay();
    }
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function clearEntry() {
    display.value = display.value.slice(0, -1);
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculatePercentage() {
    if (display.value) {
        display.value = (parseFloat(display.value) / 100).toString();
    }
}

function toggleSign() {
    if (display.value) {
        display.value = (parseFloat(display.value) * -1).toString();
    }
}

function calculateResult() {
    try {
        if (display.value.includes("/0")) {
            throw "Cannot divide by zero";
        }
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
        setTimeout(clearDisplay, 2000);
    }
}
