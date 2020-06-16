$(document).ready(function () {

    $('.datepicker').datepicker({
        format: "mm-yyyy",
        viewMode: "months",
        minViewMode: "months"

    });

    $('.cell').click(function () {
        $('.cell').removeClass('select');
        $(this).addClass('select');
    });

});

function jumpTo(newdate) {
    var month = newdate.split("-")[0];
    var year = newdate.split("-")[1];
    createtable(month, year);
};

function createtable(month, year) {
    document.getElementById('whtable').innerHTML = '';
    var table = document.getElementById("whtable")
    var row = table.insertRow(0);
    row.insertCell(0).outerHTML = "<th id=\"date\" colspan=\"2\">Date</th>";
    row.insertCell(1).outerHTML = "<th id = \"workinghours\" colspan=\"2\">Working hours</th>";
    row.insertCell(2).outerHTML = "<th>Total</th>";
    // var cell = row.insertCell(0).innerHTML = "Date"; 
    // cell.colSpan = "2"; 
    //var cell = row.insertCell(1).innerHTML = "Working hours";
    //cell.colSpan = "2";
    //var cell = row.insertCell(2);


    for (i = 1; i <= getDaysInMonth(month, year); i++) {
        var row = table.insertRow(i)
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = i + "." + month + "." + year

        var d = new Date(year, month, i);
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        cell2.innerHTML = days[d.getDay()];

        cell3.innerHTML = "<input id= \"checkinTime" + i + "\" type=\"text\" value= \"00:00\" oninput= \"getInputValue(" + i + "," + month +"," + year +") \" onchange= \"getInputValue(" + i +"," + month +","+ year + ") \"/>";

        cell4.innerHTML = "<input id= \"checkoutTime" + i + "\" type=\"text\" value= \"01:00\" oninput= \"getInputValue(" + i + "," + month +"," + year + ")\" onchange= \"getInputValue(" + i +"," + month +","+ year+") \"/>";

        cell5.innerHTML = "<span id=\"outputAverage" + i + "\"></span>"; // i miatt minden sornak kul. idja van
    }
}


function getInputValue(row, month, year) { //a row az i valtozo
    var inputVal = document.getElementById("checkinTime" + row).value;

    var checkinTime = inputVal.split(":");

    var inputValue = document.getElementById("checkoutTime" + row).value;

    var checkoutTime = inputValue.split(":");

    var checkinHours = parseInt(checkinTime[0]);

    var checkoutHours = parseInt(checkoutTime[0]);

    var checkinMinutes = checkinHours * 60; //checkinkhours turned to minutes

    var checkoutMinutes = checkoutHours * 60; //checkoutkhours turned to minutes

    var chinMinutes = parseInt(checkinTime[1]);

    var choutMinutes = parseInt(checkoutTime[1]);

    var avechinMinutes = checkinMinutes + chinMinutes;

    var avechoutMinutes = checkoutMinutes + choutMinutes;

    var averageMinutes = avechoutMinutes - avechinMinutes;

    var totalHours = Math.floor(averageMinutes / 60);

    var totalMinutes = averageMinutes % 60;

    document.getElementById("outputAverage" + row).innerHTML = totalHours + ":" + totalMinutes;


    getoutcomeHours(month, year);
}

function getoutcomeHours(month, year) {

    var endResult = 0;

    for (i = 1; i <= getDaysInMonth(month, year); i++) {
        var totalTime = document.getElementById("outputAverage" + i).innerText;
        if (totalTime != '') {
            var monthlyHours = totalTime.split(":");
            var totalHours = parseInt(monthlyHours[0]);
            var monthlyMinutes = parseInt(monthlyHours[1]);
            var totalhourstoMin = totalHours * 60;
            var totalmonthlyMinutes = totalhourstoMin + monthlyMinutes;
            endResult = totalmonthlyMinutes + endResult;
        }
    }

    var outcomeHours = Math.floor(endResult / 60);
    var outcomeMinutes = endResult % 60;
    document.getElementById("totalhoursinamonth").innerHTML = outcomeHours + ":" + outcomeMinutes;
}