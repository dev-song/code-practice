const fs = require('fs');

module.exports = async function readdirCustom(path, fileExt, callback) {
  fs.readdir(path, (err, data) => {
    if (err) {
      return callback(err);
    }

    return callback(null, data);
  });
};
