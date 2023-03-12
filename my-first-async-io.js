const fs = require('fs');

async function main() {
  const filePath = process.argv[2];
  let newLinesCount = 0;

  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    const contents = Buffer.from(data).toString();
    const chars = contents.split('');
    chars.forEach((char) => {
      if (char === '\n') {
        newLinesCount++;
      }
    });

    console.log(newLinesCount);
  });
}

main();
