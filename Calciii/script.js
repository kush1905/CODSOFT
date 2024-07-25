function addToDisplay(value) {
    document.getElementById('show').value += value;
}

function clr() {
    document.getElementById("show").value="";
}

function calculate() {
    let showValue = document.getElementById('show').value;
    let result = eval(showValue);
    document.getElementById('show').value = result;
}