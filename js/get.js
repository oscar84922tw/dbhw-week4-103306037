/*
 * @Author: oscar
 * @Date:   2016-04-04 01:03:00
 * @Last Modified by:   oscar84922tw
 * @Last Modified time: 2016-04-04 13:20:24
 */

'use strict';




function loadXMLDoc() {
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        var xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
           // var consultJson = JSON.parse(xmlhttp.responseText);
            // for(var i = 0;i<consultJson.)
            var data = xmlhttp.responseText;
            document.getElementById("myDiv").innerHTML = data ;

            // for (var i = 0; i <= JSON.parse(data).length; i--) {
            //     0[i]
            // }
            // console.log(consultJson);
            // drawTable(JSON.parse(xmlhttp.responseText));
          }
    }
    xmlhttp.open("GET", "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=5aacba65-afda-4ad5-88f5-6026934140e6", true);
    xmlhttp.send();
}

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#personDataTable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData.SectionName + "</td>"));
    row.append($("<td>" + rowData.AvgSpd + "</td>"));
}

