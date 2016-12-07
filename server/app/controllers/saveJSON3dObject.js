const fs = require('fs');

module.exports = (data, id) => {
  const json = JSON.stringify(data, null, 2);
  return new Promise((resolve, reject) => {
    fs.writeFile(`server/uploads/converted/${id}.json`, json, (data) => {
      console.log('converted!');
    });
  });
};