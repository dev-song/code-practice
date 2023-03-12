const fs = require('fs');
const readdirCustom = require('./mymodule');

async function main() {
  const currentDirPath = process.argv[2];
  const extFilter = process.argv[3];
  readdirCustom(currentDirPath, extFilter, (err, files) => {
    files.forEach((filename) => {
      if (filename.endsWith(`.${extFilter}`)) {
        console.log(filename);
      }
    });
  });
}

main();
