var columnDefs = [
    {field: 'name', width: 100},
    {
        field: 'gender',
        width: 90,
      //  editable:false,
        cellRenderer: 'genderCellRenderer',
        cellRendererParams: {
            params2 :[{key:1,"value":'<i style="color:red;" class="fas fa-male fa-w-8 fa-2x" ></i>'},{key:0,value:'<i style="color:green;" class="fas fa-female fa-w-8 fa-2x"></i>'}]     // Complementing the Cell Renderer parameters
        },
        cellEditorSelector: function(params) {
        return {
          component: 'cellSelect',
          params: {
            values: [{text:"Select",value:-1},{text:"Male",value:1},{text:"Female",value:0}]
          }
        };
      }
     
    },
    {
        field: 'country',
        width: 100,
         editable:true,
         cellRenderer: 'genderCellRenderer',
        cellRendererParams: {
            params2 :[{key:"IND","value":"INDIA"},{key:"US",value:'USA'}]     // Complementing the Cell Renderer parameters
        },
        
        cellEditorSelector: function(params) {
        return {
          cellHeight: 10,
          component: 'cellSelect',
          params: {
            values: [{text:"Select",value:-1},{text:"India",value:"IND"},{text:"USA",value:"US"}]
          }
        };
      }
      
    },
    {
        field: 'city', width: 70,
        cellEditor: 'agRichSelectCellEditor',
        cellEditorParams: function (params) {
            var selectedCountry = params.data.country;
            var allowedCities = countyToCityMap(selectedCountry);
            return {
                values: allowedCities,
                formatValue: function (value) {
                    return value + ' (' + selectedCountry + ')';
                }
            };
        }
    },
    {field: 'address', width: 200, cellEditor: 'agLargeTextCellEditor'}
];


function countyToCityMap(match) {
    var map = {
        'Ireland': ['Dublin', 'Cork', 'Galway'],
        'USA': ['New York', 'Los Angeles', 'Chicago', 'Houston']
    };

    return map[match];
}

var gridOptions = {
    components: {
        'genderCellRenderer': CellRender,
        'cellSelect':CellSelect
    },
    columnDefs: columnDefs,
    rowData: rowData,
    defaultColDef: {
        editable: true,
        resizable: true
    },
    onGridReady: function (params) {
        params.api.sizeColumnsToFit();
    },
    onCellValueChanged: onCellValueChanged
};

function onCellValueChanged(params) {
    var colId = params.column.getId();
    if (colId === 'country') {

        var selectedCountry = params.data.country;
        var selectedCity = params.data.city;

        var allowedCities = countyToCityMap(selectedCountry);
        var cityMismatch = allowedCities.indexOf(selectedCity) < 0;

        if (cityMismatch) {
            params.node.setDataValue('city', null);
        }
    }
}

// setup the grid after the page has finished loading

 var xx = document.getElementById('showAll');
 xx.addEventListener('click', function () {
   debugger;
    gop.gridOptions.api.forEachNode(function(d,i){
      console.log(d.data);
    })
});

document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');
   gop =  new agGrid.Grid(gridDiv, gridOptions);
});
