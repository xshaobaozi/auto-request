const { compile, compileFromFile } = require("json-schema-to-typescript");
const fs = require('fs')
// compile from file
compileFromFile("./assets/test.json").then((ts) =>
  fs.writeFileSync("api.d.ts", ts)
);

// // or, compile a JS object
// let mySchema = {
//   properties: [...]
// }
// compile(mySchema, 'MySchema')
//   .then(ts => ...)
