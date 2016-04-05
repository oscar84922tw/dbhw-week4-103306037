/*
 * @Author: oscar
 * @Date:   2016-04-04 01:03:00
 * @Last Modified by:   oscar84922tw
 * @Last Modified time: 2016-04-05 22:34:17
 */


loadXMLDoc();

function loadXMLDoc() {
    var resultdata = new Array();
    $.ajax({
            url: 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=5aacba65-afda-4ad5-88f5-6026934140e6',
            type: 'get',
            dataType: 'json',
            success: function(data) {
                var dataList = data.result.results;
                // var WebdataList = datalist.map
                var WebDataList = dataList.map(function(dataList) {
                    var HTMLString = '<tr><td data-th="_id">' + dataList._id + '</td><td data-th="SectionId">' + dataList.SectionId +'</td><td data-th="SectionName">'+dataList.SectionName +'</td><td data-th="AvgSpd">'+dataList.AvgSpd+'</td><td data-th="AvgOcc">'+dataList.AvgOcc+'</td><td data-th="MOELevel">'+dataList.MOELevel+'</td><td data-th="StartWgsX">'+dataList.StartWgsX+'</td><td data-th="EndWgsX">'+dataList.EndWgsX+'</td><td data-th="StartWgsY">'+dataList.StartWgsY+'</td><td data-th="EndWgsY">'+dataList.EndWgsY+'</td></tr>';
                    var items = "";
                //     <tr>
                //     <td data-th="_id"></td>
                //     <td data-th="SectionId">03/23〔三〕 </td>
                //     <td data-th="SectionName">$119,900</td>
                //     <td data-th="AvgSpd">26</td>
                //     <td data-th="AvgOcc">6</td>
                //     <td data-th="MOELevel">6</td>
                //     <td data-th="StartWgsX">6</td>
                //     <td data-th="EndWgsX"></td>
                //     <td data-th="StartWgsY">6</td>
                //     <td data-th="StartWgsY"></td>
                //     </tr>
                    // for (var key in animal) {
                    //     if (key != "_id" && key != "ImageName") {
                    //         items = items + "<li class='list-group-item'>" + key + ":" + animal[key] + "</li>";
                    //     }
                    // }
                    var HTMLString = HTMLString + items + "</ul></p><div>";
                    return HTMLString;
                });
                WebDataList.forEach(function(html) {
                    $(html).appendTo("#myDiv");
                });
                // if (dataList) {
                //     $.each(dataList, function(i, item) {
                //         console.log(Object.values(item));
                //         // document.getElementById('myDiv').innerHTML = Object.values(item);

                //     });
                // }
            }
        })
        // console.log(resultdata);

}



// drawTable();

// function drawTable(data) {
//     for (var i = 0; i < data.length; i++) {
//         drawRow(data[i]);
//     }
// }

// function drawRow(rowData) {
//     var row = $("<tr />")
//     $("#personDataTable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
//     row.append($("<td>" + rowData._id + "</td>"));
//     row.append($("<td>" + rowData.SectionId + "</td>"));
//     row.append($("<td>" + rowData.SectionName + "</td>"));
//     row.append($("<td>" + rowData.AvgSpd + "</td>"));
//     row.append($("<td>" + rowData.AvgOcc + "</td>"));
//     row.append($("<td>" + rowData.TotalVol + "</td>"));
//     row.append($("<td>" + rowData.MOELevel + "</td>"));
//     row.append($("<td>" + rowData.StartWgsX + "</td>"));
//     row.append($("<td>" + rowData.StartWgsY + "</td>"));
//     row.append($("<td>" + rowData.EndWgsX + "</td>"));
//     row.append($("<td>" + rowData.EndWgsY + "</td>"));

// }
