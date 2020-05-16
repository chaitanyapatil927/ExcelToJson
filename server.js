

var exceltojson = require("xlsx-to-json-lc");
  exceltojson({
    input: "books.xlsx",
    output: "out.json"
    
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
      //result will contain the overted json data
    }
  });