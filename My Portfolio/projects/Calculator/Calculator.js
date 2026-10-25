let display = document.getElementById("display");

function addValue(value) {

    if (display.innerText == "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteNumber() {

    if (display.innerText.length == 1) {
        display.innerText = "0";
    } else {
        display.innerText =
            display.innerText.slice(0, -1);
    }
}

function calculate() {

    try {
        let answer = eval(display.innerText);
        display.innerText = answer;
    }

    catch {
        display.innerText = "Error";
    }
}