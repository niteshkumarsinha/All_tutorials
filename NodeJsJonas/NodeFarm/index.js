const hello = "Hello World";
const fs = require("fs");

fs.readFile("./txt/output.txt", "utf-8", (err, data) => {
  console.log("Reading from a async func");
  console.log(data);
});

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `Avocado:: ${textIn}`;
fs.writeFileSync("txt/output.txt", textOut);
