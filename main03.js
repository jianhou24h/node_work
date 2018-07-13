var fs = require("fs");

fs.readFile('input01.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("complete");