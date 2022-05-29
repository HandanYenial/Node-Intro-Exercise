const fs = require('fs');
//fs module provides useful functionality to access and interact with the file
//system. as fs.read, fs.rename, fs.writeFile
const process = require('process');

function cat(path){
    fs.readFile(path, 'utf8', function(err,data){
        if(err){
            console.error(`Error reading ${path} : ${err}`);
            process.exit(1);
        } else{
            console.log(data);
        }
    });

}

cat(process.argv[2]);