
agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module("example", ["agGrid"]);

module.controller("exampleCtrl", function($scope) {
    function columnInit(data,key){
        var t=[];
         for(var i in data){
             if(typeof data[i] != "object"){
                 if(key != undefined){
                    t.push({
                        headerName:i,
                        field:key+"."+i
                     })
                 }else{
                    t.push({
                        headerName:i,
                        field:i
                     })
                 }
                
             }else{
                 if(key == undefined){
                    t.push({
                        headerName:i,
                        children:columnInit(data[i],i)
                     })
                 }else{
                    t.push({
                        headerName:i,
                        children:columnInit(data[i],key+"."+i)
                     })
                 }
             }
         }
         return t;
    }
    function ran(min,max){
         return Math.floor(Math.random() * max) + min; 
    }
    setInterval(function(){
    getP(function(rev,rej){
        var url = "https://jsonresp.herokuapp.com/datatable";
       //  url = "https://jsonplaceholder.typicode.com/posts";
        // url = "https://jsonplaceholder.typicode.com/users";
       fetch(url)
      .then(response => response.json())
      .then(json => {
        json.data = json.data.map(function(d,i){
if(i%2 == 0){
    d.test1 = {foo:234,bar:"wer",let:{get:ran(1,2000),set:ran(200,5000),pet:{god:"pilu"+ran(200,5000),cat:"pintu"+ran(200,5000)}}};
    d.test2 = [{foo:ran(1,2000),bar:ran(1,2000)},{foo:ran(1,2000),bar:ran(1,2000)},{foo:ran(1,2000),bar:ran(1,2000),war1:ran(1,2000),war2:ran(1,2000)}];
}

             return d;
        })
     
         rev(json.data);
      })
    }).done(function(resp){
    $scope.gridOptions.rowData = resp;
    $scope.gridOptions.columnDefs = columnInit(resp[0]);//columnDefs;
    console.log($scope.gridOptions);
    $scope.gridOptions.refresh();
    })
    },5000)
    var temp = [
        {"PART_NUMBER":"TE88AW011701N","PART_NAME":"PANEL LONG MEMBER FRT OUTER RH","MATERIAL":"MM25 DP 340/590","JUSTIFICATION":"","STATUS":"FITO","TARGETCOST":"","PART_GROUP":"","TOOLMAKER":[{"NAME":"testingadnate4","ID":"TEST01","TM_CURRENCY":"INR","FINAL_QUOTED_COST":"1502"}],"ToolmakerPref":"","SeqPref":"","LANDEDCOST":{"L1":{"TOOLMAKERID":"TEST01","TOOLMAKER":"testingadnate4","VALUE":"0.45"}},"NOOFDIES":{"L1":{"TOOLMAKERID":"TEST01","TOOLMAKER":"testingadnate4","ERFQ_NUMBER":"TESTING88-TEST01-A1-001","VALUE":"7"}},"DIEWEIGHT":{"L1":{"TOOLMAKERID":"TEST01","TOOLMAKER":"testingadnate4","ERFQ_NUMBER":"TESTING88-TEST01-A1-001","VALUE":"174"}},"BASICCOST":{"L1":{"TOOLMAKERID":"TEST01","TOOLMAKER":"testingadnate4","ERFQ_NUMBER":"TESTING88-TEST01-A1-001","VALUE":"0.02"}},"COSTPERTON":{"L1":{"TOOLMAKERID":"TEST01","TOOLMAKER":"testingadnate4","ERFQ_NUMBER":"TESTING88-TEST01-A1-001","VALUE":"0.00"}},"L1":{"LANDEDCOST":{"TOOLMAKERID":"TEST01","TOOLMAKER":"testingadnate4","VALUE":"0.45"},"NOOFDIES":{"TOOLMAKERID":"TEST01","TOOLMAKER":"testingadnate4","ERFQ_NUMBER":"TESTING88-TEST01-A1-001","VALUE":"7"},"DIEWEIGHT":{"TOOLMAKERID":"TEST01","TOOLMAKER":"testingadnate4","ERFQ_NUMBER":"TESTING88-TEST01-A1-001","VALUE":"174"},"BASICCOST":{"TOOLMAKERID":"TEST01","TOOLMAKER":"testingadnate4","ERFQ_NUMBER":"TESTING88-TEST01-A1-001","VALUE":"0.02"},"COSTPERTON":{"TOOLMAKERID":"TEST01","TOOLMAKER":"testingadnate4","ERFQ_NUMBER":"TESTING88-TEST01-A1-001","VALUE":"0.02"}}}
    ];
    $scope.gridOptions = {
        columnDefs: columnInit(temp),
        rowData: temp,
        refresh:function(){
            if(this.api === undefined)
            {
              this.columnDefs =  this.columnDefs;
              this.rowData =  this.rowData;
            }else{
              this.api.setRowData(this.rowData);
              this.api.setColumnDefs(this.columnDefs);       
            }
        }
    };
    //$scope.gridOptions.refresh();
});
