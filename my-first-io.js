const fs = require('fs');

function main() {
  const filePath = process.argv[2];
  const file = fs.readFileSync(filePath);
  const contents = Buffer.from(file).toString();
  const chars = contents.split('');
  let newLinesCount = 0;
  chars.forEach((char) => {
    if (char === '\n') {
      newLinesCount++;
    }
  });

  console.log(newLinesCount);
}

main();
