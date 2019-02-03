const fs = require('fs');
const writeFile = (json,callback)=>{
    fs.writeFile('config.json', JSON.stringify(json,null,2),(err)=>{
        if(err) throw err;
        callback();
    });
};

module.exports = writeFile;

