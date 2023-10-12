const fs = require("fs");

//reading file content

fs.readFileSync("text1.txt");


console.log("text 1 content: "+read)

//writing in file

 fs.writeFileSync("text2.txt", "ola file too ola");


console.log("file has been written");

// updating content in file

 fs.appendFileSync("text3.txt" , "file has been updated")

console.log("file has been updated");

//deleting file

 fs.unlinkSync("text4.txt");                     


//create dir

fs.mkdirSync("folder1");

//readcontent inside directory

const folderPath = "D:\\nodec\\nodemodule\\folder1";

const readFolder = fs.readdirSync(folderPath);

console.log("folder content: ", readFolder);


// directory or file exits

const existFile = fs.existsSync("folder1/text2.txt");

console.log(existFile);


//delet directory

fs.rmdirSync("directoryName");

console.log("dir has been deleted / empty the directory")