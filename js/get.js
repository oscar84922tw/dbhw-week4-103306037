/*
 * @Author: oscar
 * @Date:   2016-04-04 01:03:00
 * @Last Modified by:   oscar
 * @Last Modified time: 2016-04-04 20:15:21
 */




function loadXMLDoc() {
    var resultdata = new Array();
    $.ajax({
            url: 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=5aacba65-afda-4ad5-88f5-6026934140e6',
            type: 'get',
            dataType: 'json',
            success: function(data) {
                if (data) {
                    $.each(data, function(i, item) {
                        console.log(item);
                        var inner = {

                            results: {
                                offset: data.result.offset,
                                limit: data.result.limit,
                                count: data.result.count,
                                sort: data.result.sort,
                                result: $.each(data.result.results, function(i, item) {
                                    console.log('down2');
                                    var dd = {
                                        id: data.result.results._id,
                                        sectionID: data.result.results.SectionId,
                                        SectionName: data.result.results.SectionName,
                                        AvgSpd: data.result.results.AvgSpd,
                                        AvgOcc: data.result.results.AvgOcc,
                                        TotalVol: data.result.results.TotalVol,
                                        MOELevel: data.result.results.MOELevel,
                                        StartWgsX: data.result.results.StartWgsX,
                                        StartWgsY: data.result.results.StartWgsY,
                                        EndWgsX: data.result.results.EndWgsX,
                                        EndWgsY: data.result.results.EndWgsY,
                                    };
                                }),
                            }
                        }

                        resultdata.push(inner);
                        console.log(resultdata);
                         return resultdata;
                    });
                }
            }
        })
        // console.log(resultdata);

}

var tmp = $.makeArray(loadXMLDoc());

console.log(typeof tmp);

// drawTable();

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#personDataTable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    row.append($("<td>" + rowData._id + "</td>"));
    row.append($("<td>" + rowData.SectionId + "</td>"));
    row.append($("<td>" + rowData.SectionName + "</td>"));
    row.append($("<td>" + rowData.AvgSpd + "</td>"));
    row.append($("<td>" + rowData.AvgOcc + "</td>"));
    row.append($("<td>" + rowData.TotalVol + "</td>"));
    row.append($("<td>" + rowData.MOELevel + "</td>"));
    row.append($("<td>" + rowData.StartWgsX + "</td>"));
    row.append($("<td>" + rowData.StartWgsY + "</td>"));
    row.append($("<td>" + rowData.EndWgsX + "</td>"));
    row.append($("<td>" + rowData.EndWgsY + "</td>"));

}
