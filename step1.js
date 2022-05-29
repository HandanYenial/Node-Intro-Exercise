//In step1.js, write a function, cat.It should take one argument, path, and it should read 
//the file with that path, and print the contents of that file.Then, write some code that 
//calls that function, allowing you to specify the path argument via the command line.
//If you give it the path of a non-existent file, it should print that error and halt the script execution:


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