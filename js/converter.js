
function toLbs() {
    var kg = document.getElementById("convertable").value;
    var lb = kg * 2.2046
    document.getElementById("converted").value = lb;
}

function toKg() {
    var lb = document.getElementById("converted").value;
    var kg = lb / 2.2046
    document.getElementById("convertable").value = kg;
}

function toMile() {
    var km = document.getElementById("convertable").value;
    var mile = km * 0.6213
    document.getElementById("converted").value = mile;
}

function toKm() {
    var mile = document.getElementById("converted").value;
    var km = mile / 0.6213
    document.getElementById("convertable").value = km;
}

function toCbm() {
    var l = document.getElementById("convertable").value;
    var cbm = l * 0.001
    document.getElementById("converted").value = cbm;
}

function toL() {
    var cbm = document.getElementById("converted").value;
    var l = cbm / 0.001
    document.getElementById("convertable").value = l;
}