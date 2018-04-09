var fs = require("fs");
var colors = require("colors");

function readDirContent() {
  fs.readdir("./", "utf-8", function(err, files) {
    console.log("Directory content: ".grey);
    console.log(files);
    fs.writeFile("./directory_content.txt", files, function(err) {
      console.log("Zapisano\n".green);
    });
  });
}
readDirContent();