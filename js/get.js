/*
 * @Author: oscar
 * @Date:   2016-04-04 01:03:00
 * @Last Modified by:   oscar84922tw
 * @Last Modified time: 2016-04-05 23:51:41
 */

function loadXMLDoc() {
    var resultdata = new Array();
    $.ajax({
        url: 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=5aacba65-afda-4ad5-88f5-6026934140e6',
        type: 'get',
        dataType: 'json',
        success: function(data) {
            var dataList = data.result.results;
            var WebDataList = dataList.map(function(dataList) {
                var HTMLString = '<tr></td><td data-th="SectionId">' + dataList.SectionId + '</td><td data-th="SectionName">' + dataList.SectionName + '</td><td data-th="AvgSpd">' + dataList.AvgSpd + '</td><td data-th="AvgOcc">' + dataList.AvgOcc + '</td><td data-th="StartWgsX">' + dataList.StartWgsX + '</td><td data-th="EndWgsX">' + dataList.EndWgsX + '</td><td data-th="StartWgsY">' + dataList.StartWgsY + '</td><td data-th="EndWgsY">' + dataList.EndWgsY + '</td></tr>';
                var items = "";
                var HTMLString = HTMLString + items + "</ul></p><div>";
                return HTMLString;
            });
            WebDataList.forEach(function(html) {
                $(html).appendTo("#dataTable");
            });
            $('.circle').hide();
            $('.circle1').hide();

        }
    })

}
