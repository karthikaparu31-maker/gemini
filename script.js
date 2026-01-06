function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}

function insert(char) {
    document.getElementById("result").value += char;
}

function calculate() {
    let result = document.getElementById("result").value;
    try {
        let finalResult = eval(result);
        document.getElementById("result").value = finalResult;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
