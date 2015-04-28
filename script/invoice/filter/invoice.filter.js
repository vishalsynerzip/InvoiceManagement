/**
 * Created by vishalp on 4/22/2015.
 */
angular.module('invoice').filter('Outstanding', [function () {
    return function (invoicelst,custid) {
        var totalOutstanding = 0;
        for (var i = 0; i < invoicelst.length; i++) {

            if (i.paid==false) {
                totalOutstanding= totalOutstanding+totalcost;
            }
        }
        return totalOutstanding;
    }
}]);