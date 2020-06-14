/* When the input field receives input, convert the value from kilogramm to Pound */
function unitConverter(valNum) {
    valNum = parseFloat(valNum);

    if (isNaN(valNum)) {
        document.getElementById("outputPounds").innerHTML = '';
    } else {
        document.getElementById("outputPounds").innerHTML = (valNum) * 2.2046;
    }
}