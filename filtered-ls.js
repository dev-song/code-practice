const fs = require('fs');

async function main() {
  const currentDirPath = process.argv[2];
  const extFilter = process.argv[3];
  fs.readdir(currentDirPath, (err, files) => {
    if (err) throw err;

    files.forEach((filename) => {
      if (filename.endsWith(`.${extFilter}`)) {
        console.log(filename);
      }
    });
  });
}

main();

/**
 * Official Solution
 * path 모듈을 추가로 활용한다는 점이 내 코드와의 차이
 */

// 'use strict'
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
