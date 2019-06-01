fetch('./english_tut')
    .then(response => response.arrayBuffer())
    .then(json => {
        var data = new Uint8Array(json);
        var wb = XLSX.read(data, {
            type: "array"
        });
        var result = [];
        wb.SheetNames.forEach(function(sheetName) {
            var csv = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
            if (csv.length > 0) {
                var o = {};
                o[sheetName] = csv;
                result.push(o)
            }
        });
        console.log(result)
    })