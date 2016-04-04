/*
 * @Author: oscar
 * @Date:   2016-04-04 01:03:00
 * @Last Modified by:   oscar
 * @Last Modified time: 2016-04-04 10:48:06
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
            document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
            console.log(xmlhttp.responseText);

          }
    }
    xmlhttp.open("POST", "http://data.taipei/opendata/datalist/datasetMeta/preview?id=58093ba6-4c98-4148-b27a-50ad97d7afca&rid=6f4e0b9b-8cb1-4b1d-a5c4-febd90f62469", true);
    xmlhttp.send();
}
