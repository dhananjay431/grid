function getP(cb) { return new Promise(cb);}
    Promise.prototype.done = function(cb1,cb2){
        return this.then(cb1,cb2);
    }
    // Object.prototype.refresh = function(){
    //     console.log("reinit=>",this);
    //     if(this.api === undefined)
    //     {
    //       this.columnDefs =  this.columnDefs;
    //       this.rowData =  this.rowData;
    //     }else{
    //       this.api.setRowData(this.rowData);
    //       this.api.setColumnDefs(this.columnDefs);       
    //     }
    // }

   