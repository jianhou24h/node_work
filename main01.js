var fs = require("fs");

fs.readFile('input.txt', 'UTF-8',function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("実行完了");